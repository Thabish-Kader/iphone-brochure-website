import gsap from "gsap";
export const scrollAnimation = (
	position: THREE.Vector3,
	target: THREE.Vector3,
	onUpdate: () => void,
	isMobile: boolean
) => {
	const tl = gsap.timeline();
	tl.to(position, {
		x: isMobile ? -3.38 : -7.0,
		y: isMobile ? -10.74 : -12.2,
		z: isMobile ? -5.93 : -6.0,
		scrollTrigger: {
			trigger: ".sound-section",
			start: "top bottom",
			end: "top top",
			scrub: 2,
			immediateRender: false,
		},
		onUpdate,
	})
		.to(target, {
			x: isMobile ? 1.52 : 0.7,
			y: isMobile ? 0.77 : 1.9,
			z: isMobile ? -1.08 : 0.7,
			scrollTrigger: {
				trigger: ".sound-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
		})
		.to(".sound-section-content", {
			opacity: 1,
			scrollTrigger: {
				trigger: ".sound-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
		})
		.to(".jumbotron-section", {
			opacity: 0,
			x: 1.52,
			y: 0.77,
			z: -1.08,
			scrollTrigger: {
				trigger: ".sound-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
		})
		.to(position, {
			x: isMobile ? 1.56 : 9.36,
			y: isMobile ? 5.0 : 10.95,
			z: isMobile ? 0.01 : 0.09,
			scrollTrigger: {
				trigger: ".display-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
			onUpdate,
		})
		.to(target, {
			opacity: 0,
			x: isMobile ? -0.55 : -1.62,
			y: isMobile ? 0.32 : 0.22,
			z: isMobile ? 0.0 : -0.06,
			scrollTrigger: {
				trigger: ".display-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
		})
		.to(".display-section", {
			opacity: 1,
			scrollTrigger: {
				trigger: ".display-section",
				start: "top bottom",
				end: "top top",
				scrub: 2,
				immediateRender: false,
			},
		});
};
