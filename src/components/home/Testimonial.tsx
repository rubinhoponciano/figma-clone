import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="figma-container">
        <div className="max-w-4xl mx-auto">
          {/* Quote mark */}
          <div className="mb-8 flex justify-center">
            <svg
              className="h-16 w-16 text-figma-purple"
              width="72"
              height="62"
              viewBox="0 0 72 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.734375H29.3975V4.64844C23.9609 8.01823 19.9219 11.9141 17.2805 16.3359C14.6901 20.7578 13.3333 25.2057 13.2109 29.6797C15.2448 28.1497 17.6328 27.3477 20.375 27.2773C24.0234 27.2773 27.068 28.5547 29.5086 31.1094C31.9492 33.6641 33.1784 36.8555 33.1784 40.6836C33.1784 44.6732 31.7943 48.0169 28.9961 50.7148C26.1979 53.4128 22.6758 54.7617 18.4297 54.7617C14.1836 54.7617 10.3555 53.3516 6.94531 50.5312C3.5351 47.6693 1.5013 43.9479 0.831055 39.3672C0.5651 37.5625 0.432129 35.8164 0.432129 34.1289C0.432129 24.1536 3.17448 15.6732 8.65918 8.6875C14.1439 1.70182 22.8125 0.734375 22.8125 0.734375L0 0.734375ZM71.5918 4.64844V0.734375H42.1943L42.1943 4.64844C47.5716 8.01823 51.6107 11.9141 54.3086 16.3359C56.9518 20.7578 58.2734 25.2057 58.3958 29.6797C56.4046 28.1497 53.9801 27.3477 51.1211 27.2773C47.4727 27.2773 44.4281 28.5547 41.9873 31.1094C39.5466 33.6641 38.3263 36.8555 38.3262 40.6836C38.3262 44.6732 39.7103 48.0169 42.5086 50.7148C45.3068 53.4128 48.8288 54.7617 53.0749 54.7617C57.321 54.7617 61.1491 53.3516 64.5593 50.5312C67.9695 47.7109 69.8753 44.0312 71.1687 39.3672C71.4346 37.5625 71.5676 35.8164 71.5675 34.1289C71.5675 24.3372 68.8252 15.8568 63.3405 8.6875C57.8558 1.51823 53.1313 0.734375 53.1313 0.734375L71.5918 4.64844Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          </div>

          {/* Quote text */}
          <blockquote className="text-center mb-12">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-gray-800">
              Nearly everything that designers and developers need is available in Figma.
            </p>
            <footer className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                {/* Profile image placeholder - replace with actual image */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="text-left">
                <p className="font-medium">Diana Mounter</p>
                <p className="text-sm text-gray-600">Head of Design, GitHub</p>
              </div>
            </footer>
          </blockquote>

          {/* Partner logos */}
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
            {/* Replace with actual logos */}
            {[...Array(6)].map((_, index) => (
              <div
                key={`logo-${index}`}
                className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center"
              >
                <span className="text-xs text-gray-500">Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
