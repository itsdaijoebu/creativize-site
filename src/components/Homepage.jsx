import Feature from "./Feature";

export default function Homepage() {
  return (
    <>
      <h2>Your digital creativity solution</h2>
      <h1>Creativize</h1>
      <input
        name="prospect-email"
        id="prospect-email"
        type="text"
        placeholder="email"
      />
      <button>Learn more</button>
      <section className="sm:flex">
        <p>
          Creativize is the ultimate tool for digital creators. Whether you're a
          graphic designer, video editor, or musician, Creativize has everything
          you need to bring your ideas to life. With an intuitive interface and
          powerful features, Creativize makes it easy to turn your visions into
          reality. Whether you're working on a professional project or just
          looking to have some fun, Creativize has you covered. Try it today and
          discover your creative potential!
        </p>
        <img src="#" />
      </section>
      <section className="sm:flex justify-around">
        <Feature imgSrc="#" title="Feature One" text="" linkText="" link="" />
        <Feature imgSrc="#" title="Feature Two" text="" linkText="" link="" />
        <Feature imgSrc="#" title="Feature Three" text="" linkText="" link="" />
        <Feature imgSrc="#" title="Feature Four" text="" linkText="" link="" />
      </section>
    </>
  );
}
