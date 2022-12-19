export default function Feature({imgSrc, title, text, linkText, link}) {
  return (
    <article>
      <img src={imgSrc} />
      <h3 className="font-bold">{title}</h3>
      <p>{text}</p>
      <a href={link}>{linkText}</a>
    </article>
  );
}
