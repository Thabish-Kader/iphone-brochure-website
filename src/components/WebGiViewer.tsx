import React, {
	useRef,
	useState,
	useCallback,
	forwardRef,
	useImperativeHandle,
	useEffect,
} from "react";
import {
	ViewerApp,
	AssetManagerPlugin,
	GBufferPlugin,
	ProgressivePlugin,
	TonemapPlugin,
	SSRPlugin,
	SSAOPlugin,
	BloomPlugin,
	GammaCorrectionPlugin,
	mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

type WebGiViewerProps = {
	contentRef: React.RefObject<HTMLDivElement>;
};
gsap.registerPlugin(ScrollTrigger);

export const WebGiViewer = forwardRef((props: WebGiViewerProps, ref) => {
	const canvasRef = useRef<HTMLCanvasElement>(null!);
	const [viewerRef, setViewerRef] = useState<any>(null);
	const [targetRef, setTargetRef] = useState<any>(null);
	const [cameraRef, setCameraRef] = useState<any>(null!);
	const [positionRef, setPositionRef] = useState<any>(null);
	const canvasContainerRef = useRef<HTMLDivElement>(null);
	const [preview, setPreview] = useState(false);

	useImperativeHandle(ref, () => ({
		triggerPreview() {
			setPreview(true);
			canvasContainerRef.current!.style.pointerEvents = "all";
			props.contentRef.current!.style.opacity = "0";
			gsap.to(positionRef, {
				x: 13.04,
				y: -2,
				z: 2.29,
				duration: 2,
				onUpdate: () => {
					viewerRef.setDirty(), cameraRef.positionTargetUpdated(true);
				},
			});
			gsap.to(targetRef, { x: 0.11, y: 0.0, z: 0.0, duration: 2 });
			viewerRef.scene.activeCamera.setCameraOptions({
				controlsEnabled: true,
			});
		},
	}));

	const memorizedScrollAnimation = useCallback(
		(
			position: THREE.Vector3,
			target: THREE.Vector3,
			onUpdate: () => void
		) => {
			if (position && target && onUpdate) {
				scrollAnimation(position, target, onUpdate);
			}
		},
		[]
	);

	const setupViewer = useCallback(async () => {
		const viewer = new ViewerApp({
			canvas: canvasRef.current,
		});

		setViewerRef(viewer);

		const manager = await viewer.addPlugin(AssetManagerPlugin);
		const camera = viewer.scene.activeCamera;
		const position = camera.position;
		const target = camera.target;

		setCameraRef(camera);
		setPositionRef(position);
		setTargetRef(target);

		// Add plugins individually.
		await viewer.addPlugin(GBufferPlugin);
		await viewer.addPlugin(new ProgressivePlugin(32));
		await viewer.addPlugin(new TonemapPlugin(true));
		await viewer.addPlugin(GammaCorrectionPlugin);
		await viewer.addPlugin(SSRPlugin);
		await viewer.addPlugin(SSAOPlugin);

		await viewer.addPlugin(BloomPlugin);

		// This must be called once after all plugins are added.
		viewer.renderer.refreshPipeline();

		await manager.addFromPath("scene-black.glb");

		viewer.getPlugin(TonemapPlugin)!.config!.clipBackground = true;
		viewer.scene.activeCamera.setCameraOptions({
			controlsEnabled: false,
		});

		window.scrollTo(0, 0);
		let needsUpdate = true;

		const onUpdate = () => {
			needsUpdate = true;
			viewer.setDirty();
		};
		viewer.addEventListener("preFrame", () => {
			if (needsUpdate) {
				camera.positionTargetUpdated(true);
				needsUpdate = false;
			}
		});
		memorizedScrollAnimation(position, target, onUpdate);
	}, []);

	useEffect(() => {
		setupViewer();
	}, []);

	const handleExit = useCallback(() => {
		canvasContainerRef.current!.style.pointerEvents = "none";
		props.contentRef.current!.style.opacity = "1";

		viewerRef.scene.activeCamera.setCameraOptions({
			controlsEnabled: false,
		});
		setPreview(false);
		gsap.to(positionRef, {
			x: 1.56,
			y: 5.0,
			z: 0.01,
			scrollTrigger: {
				trigger: ".display-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
			onUpdate: () => {
				viewerRef.setDirty();
				cameraRef.positionTargetUpdated(true);
			},
		});
		gsap.to(targetRef, {
			opacity: 0,
			x: -0.55,
			y: 0.32,
			z: 0.0,
			scrollTrigger: {
				trigger: ".display-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
		});
	}, [canvasContainerRef, viewerRef, positionRef, cameraRef, targetRef]);
	return (
		<section ref={canvasContainerRef} id="webgi-canvas-container">
			<canvas id="webgi-canvas" ref={canvasRef} />
			{preview && (
				<button className="button" onClick={handleExit}>
					Exit
				</button>
			)}
		</section>
	);
});
