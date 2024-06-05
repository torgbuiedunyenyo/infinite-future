// /Users/ratpartyserver/git/infinite-zimmah/src/components/HtmlDisplay.js

export default function HtmlDisplay({ html, css }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }}  />
    </>
  );
}