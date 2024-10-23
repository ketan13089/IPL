const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
};

const processData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data} processed!`);
        }, 1000);
    });
};

// Using async/await
const handleData = async () => {
    try {
        const data = await fetchData();
        console.log(data); // Output: "Data fetched!"
        
        const processedData = await processData(data);
        console.log(processedData); // Output: "Data fetched! processed!"
    } catch (error) {
        console.error(error);
    }
};

handleData();
