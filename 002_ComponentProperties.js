function ComponentProperties(props) {

    // Default value
    const { title = "Stranger" } = props;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
};

export default ComponentProperties;