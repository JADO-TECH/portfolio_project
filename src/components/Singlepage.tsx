import React from "react";

// --- Blog Page 1 ---
export function BlogJourneyPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">My Journey Into Web Development</h1>
        <p className="text-gray-700 mb-4">
          From curiosity to passion, my journey into web development has been a
          transformative experience. It all began with simple questions about how
          websites function and how they are built. This curiosity pushed me to
          explore HTML, CSS, and JavaScript, and soon I started building small web
          pages while experimenting with colors and layouts.
        </p>

        <p className="text-gray-700 mb-4">
          As I progressed, I encountered challenges—debugging complicated issues,
          learning new concepts, and keeping up with fast-changing technologies.
          However, every challenge strengthened my skills and discipline. I began to
          understand the importance of consistent practice and a growth mindset when
          working in tech.
        </p>

        <p className="text-gray-700">
          Today, I continue expanding my knowledge, exploring modern frameworks, and
          building projects that solve real problems. This journey has shaped not
          only my career but also my perspective on continuous learning and
          innovation.
        </p>
      </div>
    </div>
  );
}

// --- Blog Page 2 ---
export function BlogReactProjectPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">Building My First React Project</h1>
        <p className="text-gray-700 mb-4">
          Building my first React project was a major milestone in my development
          journey. React's component-based architecture introduced me to a new way
          of thinking about user interfaces—breaking them down into small, reusable
          pieces that work together seamlessly.
        </p>

        <p className="text-gray-700 mb-4">
          At first, concepts like state management, props, and hooks felt foreign to
          me. But through practice, everything became clearer. I learned how React
          handles UI updates efficiently and how to create dynamic, interactive
          components using hooks such as <code>useState</code> and
          <code> useEffect</code>.
        </p>

        <p className="text-gray-700">
          Completing my first project boosted my confidence and opened the door to
          more advanced development. It taught me clean coding practices, improved
          my workflow, and prepared me for building larger, more scalable
          applications.
        </p>
      </div>
    </div>
  );
}

// --- Blog Page 3 ---
export function BlogTypeScriptPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">Why I Love TypeScript</h1>
        <p className="text-gray-700 mb-4">
          TypeScript quickly became one of the most valuable tools in my
          development workflow. Before adopting it, I faced many bugs caused by
          unexpected data types or undefined variables—issues that were often
          difficult to catch in plain JavaScript.
        </p>

        <p className="text-gray-700 mb-4">
          With TypeScript's static typing, I can now detect errors during
          development, write cleaner code, and enjoy better auto-completion and
          readability. This has significantly reduced the number of unexpected
          issues in my applications.
        </p>

        <p className="text-gray-700">
          TypeScript is now essential in every modern application I build. It makes
          my code more professional, scalable, and reliable—qualities that are
          crucial when working on real-world projects.
        </p>
      </div>
    </div>
  );
}
