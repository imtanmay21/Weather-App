class HTTP {

    constructor(city) {
        this.apiKey = "3139f1fc234b0ae75f0a6f92b8007c26";
        this.city = city;
    }

    // api.openweathermap.org/data/2.5/forecast?q=Hyderabad&appid=75e2d0eba9eb8bcb6b3f46a63434cebb

    // GET
    async get() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const resData = await response.json();
        return resData;
    }
}

export default HTTP;