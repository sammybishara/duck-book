export default function DuckButton({label}) {
    return (
        <button style = {{
            padding: `0.5rem irem`,
            backgroundColor: `#00bcd4`,
            border: `none`,
            borderRadius: `4px`,
            color: `white`,
            cursor: `pointer`,
            margin: `0.5rem`
        }}>
            {label}
        </button>
    );
}