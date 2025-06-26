export default function Post({author, content}) {
    return (
        <div style={{
            border: `ipx solid #ccc`,
            padding: `irem`,
            marginBotton: `irem`,
            borderRadius: `6px`,
            backgroundColor: `#f9f9f9`
        }}>
            <strong>{author}</strong>
            <p>{content}</p>
        </div>
    );
}