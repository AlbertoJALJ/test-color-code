const BASE_URL = "http://localhost:4000";
const axios = require("axios");

describe("calcularValorResistencia", () => {
  test("Calcula correctamente el valor de una resistencia", async () => {
    const testCases = [
      { a: "Red", b: "Black", c: "Yellow", d: "Gold", expected: 200000 },
      { a: "Green", b: "Blue", c: "Brown", d: "Silver", expected: 560 },
      { a: "Yellow", b: "Violet", c: "Red", d: "Gold", expected: 4700 },
    ];

    for (const testCase of testCases) {
      const { a, b, c, d, expected } = testCase;
      const response = await axios.post(BASE_URL, {
        First: a,
        Second: b,
        Third: c,
        Fourth: d,
      });
      console.log(response.data);
      const calculatedValue = response.data.value;
      expect(calculatedValue).toBe(expected);
    }
  });

  test('Devuelve null si al menos un color no está en la lista', async () => {

    const response = await axios.post(BASE_URL, {
      First: "Red",
      Second: "Black",
      Third: "Yellow",
      Fourth: "Platinum",
    });
    
    expect(response.data.value).toBe(null);
  });
});
