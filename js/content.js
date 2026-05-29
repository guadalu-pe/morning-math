// ─── All lesson content ───────────────────────────────────────────────────────

const SUBJECTS = {

  algebra: {
    label: "Algebra",
    icon: "𝑥",
    color: "#0071e3",
    lessons: [
      {
        concept: "Solving for a Mystery Number",
        desc: "Imagine x is a box hiding a number inside. Algebra helps us peek inside the box by doing the same thing to both sides of the equals sign — like peeling layers off an onion until only the box is left.",
        problem: "Solve for x:   3x + 7 = 22",
        steps: [
          { action: "Start with what we know", math: "3x + 7 = 22" },
          { action: "Subtract 7 from both sides (undo the +7)", math: "3x = 22 − 7 = 15" },
          { action: "Divide both sides by 3 (undo the ×3)", math: "x = 15 ÷ 3 = 5" },
          { action: "Check it — does 3×5+7 equal 22?", math: "15 + 7 = 22  ✓  yes!" },
        ],
        answer: "x = 5"
      },
      {
        concept: "The Distributive Property",
        desc: "Think of it like handing out pizza slices. If you have 4 friends and each gets (2 slices of cheese + 3 slices of pepperoni), you multiply the 4 by each thing inside the parentheses separately.",
        problem: "Expand and simplify:   4(2x − 3) + 6",
        steps: [
          { action: "Multiply 4 by the first term inside", math: "4 × 2x = 8x" },
          { action: "Multiply 4 by the second term inside", math: "4 × (−3) = −12" },
          { action: "Bring in the +6 and write it out", math: "8x − 12 + 6" },
          { action: "Combine the plain numbers", math: "8x − 6" },
        ],
        answer: "8x − 6"
      },
      {
        concept: "Factoring a Trinomial",
        desc: "Factoring is like un-baking a cake — taking something already mixed together and figuring out what ingredients went in. We need two numbers that multiply AND add to specific targets.",
        problem: "Factor:   x² + 5x + 6",
        steps: [
          { action: "Find pairs of numbers that multiply to 6", math: "Pairs: (1×6), (2×3)" },
          { action: "Which pair also adds to 5?", math: "1+6=7 ✗   2+3=5 ✓" },
          { action: "Write as two brackets using 2 and 3", math: "(x + 2)(x + 3)" },
          { action: "Verify by expanding back out", math: "x²+3x+2x+6 = x²+5x+6  ✓" },
        ],
        answer: "(x + 2)(x + 3)"
      },
      {
        concept: "Two Equations, One Answer",
        desc: "Imagine two clues in a riddle. Each clue alone doesn't solve it, but together they do. We plug one clue into the other — that's called substitution.",
        problem: "Solve:   y = 2x + 1   and   3x + y = 16",
        steps: [
          { action: "The first equation tells us exactly what y is", math: "y = 2x + 1" },
          { action: "Replace y in the second equation", math: "3x + (2x+1) = 16   →   5x + 1 = 16" },
          { action: "Solve for x", math: "5x = 15   →   x = 3" },
          { action: "Plug x = 3 back into the first equation", math: "y = 2(3) + 1 = 7" },
        ],
        answer: "x = 3,  y = 7"
      },
      {
        concept: "The Quadratic Formula",
        desc: "Some equations have an x² in them and can have two answers — like a ball thrown up that comes back down at two different times. The quadratic formula is a recipe that always cracks these open.",
        problem: "Solve:   x² − 5x + 6 = 0",
        steps: [
          { action: "Name the ingredients: a, b, c", math: "a = 1,  b = −5,  c = 6" },
          { action: "The quadratic formula", math: "x = (−b ± √(b²−4ac)) / 2a" },
          { action: "Calculate the part under the square root first", math: "(−5)²−4(1)(6) = 25−24 = 1   →   √1 = 1" },
          { action: "Get both answers using + and −", math: "x = (5+1)/2 = 3   or   x = (5−1)/2 = 2" },
        ],
        answer: "x = 2  or  x = 3"
      },
      {
        concept: "Slope — How Steep Is a Line?",
        desc: "Slope is how much a line goes up for every step sideways. A steep hill has big slope, a flat road has zero slope. We measure it as rise ÷ run.",
        problem: "Find the slope through points (1, 3) and (4, 9)",
        steps: [
          { action: "Slope = change in y ÷ change in x", math: "m = (y₂ − y₁) / (x₂ − x₁)" },
          { action: "Label and plug in the two points", math: "m = (9 − 3) / (4 − 1)" },
          { action: "Simplify", math: "m = 6 / 3 = 2" },
          { action: "Meaning: go right 1 step → go up 2 steps", math: "slope = 2  📈" },
        ],
        answer: "m = 2"
      },
      {
        concept: "Combining Like Terms",
        desc: "You can only add apples to apples and oranges to oranges. In algebra, you can only combine terms that share the same variable and power — those are called 'like terms.'",
        problem: "Simplify:   5x² + 3x − 2x² + 7 − x",
        steps: [
          { action: "Group all the x² terms", math: "5x² − 2x² = 3x²" },
          { action: "Group all the x terms", math: "3x − x = 2x" },
          { action: "The constant 7 has no match — keep it", math: "+ 7" },
          { action: "Write the simplified result", math: "3x² + 2x + 7" },
        ],
        answer: "3x² + 2x + 7"
      },
    ]
  },

  geometry: {
    label: "Geometry",
    icon: "△",
    color: "#8944ab",
    lessons: [
      {
        concept: "Area of a Triangle",
        desc: "Imagine a rectangle. Cut it diagonally from corner to corner — you get a triangle. That's why a triangle's area is always exactly half of a rectangle's (base × height).",
        problem: "Find the area of a triangle with base 10 cm and height 6 cm.",
        diagram: "triangle",
        steps: [
          { action: "A triangle is half a rectangle", math: "A = ½ × base × height" },
          { action: "Plug in the numbers", math: "A = ½ × 10 × 6" },
          { action: "Multiply", math: "A = ½ × 60 = 30" },
        ],
        answer: "A = 30 cm²"
      },
      {
        concept: "The Pythagorean Theorem",
        desc: "In any right triangle, the two shorter sides have a secret relationship with the longest side. Square each short side, add them, and you get the long side squared. Discovered 2,500 years ago!",
        problem: "A right triangle has legs of 6 and 8. Find the hypotenuse.",
        diagram: "right-triangle",
        steps: [
          { action: "The rule for right triangles", math: "a² + b² = c²" },
          { action: "Square both legs and add", math: "6² + 8² = 36 + 64 = 100" },
          { action: "That means c² = 100", math: "c = √100" },
          { action: "Take the square root", math: "c = 10" },
        ],
        answer: "c = 10"
      },
      {
        concept: "Circumference of a Circle",
        desc: "If you unrolled the edge of a circle into a straight line, how long would it be? It's always about 3.14 times the width. That magic number is π (pi), and it never ends!",
        problem: "Find the circumference of a circle with radius 7 cm. (π ≈ 3.14)",
        diagram: "circle",
        steps: [
          { action: "Circumference = π × diameter, and diameter = 2 × radius", math: "C = 2πr" },
          { action: "Plug in r = 7 and π ≈ 3.14", math: "C = 2 × 3.14 × 7" },
          { action: "Multiply step by step", math: "C = 6.28 × 7 = 43.96" },
        ],
        answer: "C ≈ 43.96 cm"
      },
      {
        concept: "Angles Inside a Polygon",
        desc: "Every polygon can be sliced into triangles. A triangle has 180°. So the more sides a shape has, the more triangles it holds — and the more total degrees in its angles.",
        problem: "Find the sum of interior angles of a hexagon (6 sides).",
        diagram: "hexagon",
        steps: [
          { action: "Formula: each extra side adds one more 180° triangle", math: "Sum = (n − 2) × 180°" },
          { action: "A hexagon has 6 sides, so n = 6", math: "Sum = (6 − 2) × 180°" },
          { action: "Simplify", math: "Sum = 4 × 180° = 720°" },
        ],
        answer: "Sum = 720°"
      },
      {
        concept: "Area of a Circle",
        desc: "π shows up again! To find the space inside a circle, square the radius (center to edge), then multiply by π. Like filling the circle with tiny squares and counting them all.",
        problem: "Find the area of a circle with radius 5 m. (π ≈ 3.14)",
        diagram: "circle",
        steps: [
          { action: "The formula", math: "A = πr²" },
          { action: "Square the radius first", math: "5² = 25" },
          { action: "Multiply by π", math: "A = 3.14 × 25 = 78.5" },
        ],
        answer: "A ≈ 78.5 m²"
      },
      {
        concept: "Perimeter — Fencing a Yard",
        desc: "Perimeter is how far you'd walk going all the way around a shape without lifting your feet. Just add up every side!",
        problem: "Find the perimeter of a rectangle 9 cm long and 4 cm wide.",
        diagram: "rectangle",
        steps: [
          { action: "A rectangle has two long sides and two short sides", math: "P = 2 × length + 2 × width" },
          { action: "Plug in 9 and 4", math: "P = 2(9) + 2(4) = 18 + 8" },
          { action: "Add them up", math: "P = 26" },
        ],
        answer: "P = 26 cm"
      },
      {
        concept: "Supplementary Angles",
        desc: "Angles are how 'open' something is — like a door. Two angles are supplementary when they open together to form a perfectly flat, straight line — that's exactly 180°.",
        problem: "Angle A and B make a straight line. Angle A = 65°. Find Angle B.",
        steps: [
          { action: "A straight line = 180° total", math: "A + B = 180°" },
          { action: "Plug in A = 65°", math: "65° + B = 180°" },
          { action: "Subtract 65° from both sides", math: "B = 180° − 65° = 115°" },
        ],
        answer: "Angle B = 115°"
      },
    ]
  },

  fractions: {
    label: "Fractions",
    icon: "½",
    color: "#d63060",
    lessons: [
      {
        concept: "What Is a Fraction?",
        desc: "A fraction is just 'part of something.' The bottom number says how many equal pieces the whole is cut into. The top says how many pieces you have. ½ means 1 of 2 equal pieces — like half a sandwich!",
        problem: "Simplify the fraction:   12/18",
        steps: [
          { action: "Find a number that divides evenly into BOTH 12 and 18", math: "Both are divisible by 6" },
          { action: "Divide the top by 6", math: "12 ÷ 6 = 2" },
          { action: "Divide the bottom by 6", math: "18 ÷ 6 = 3" },
          { action: "Can 2/3 be simplified further?", math: "2 and 3 share no common factor → done!" },
        ],
        answer: "2/3"
      },
      {
        concept: "Adding Fractions",
        desc: "You can only add fractions when the bottoms match — like only adding slices of the same-size pizza. If the bottoms don't match, resize the slices first.",
        problem: "Add:   1/4 + 2/4",
        steps: [
          { action: "Check: do the bottoms match?", math: "Both say 4  ✓  same-size slices!" },
          { action: "Add just the tops, keep the bottom the same", math: "1 + 2 = 3,  keep the 4" },
          { action: "Write the answer", math: "3/4" },
          { action: "Can it simplify? 3 and 4 share no factor", math: "3/4  ✓  done" },
        ],
        answer: "3/4"
      },
      {
        concept: "Adding Unlike Fractions",
        desc: "If the pizza slices are different sizes, you can't count them together yet. You have to cut everything to the same size first — that's finding the common denominator.",
        problem: "Add:   1/3 + 1/4",
        steps: [
          { action: "Find a number both 3 and 4 divide into evenly", math: "3 × 4 = 12  →  use 12" },
          { action: "Convert 1/3 → multiply top & bottom by 4", math: "1/3 = 4/12" },
          { action: "Convert 1/4 → multiply top & bottom by 3", math: "1/4 = 3/12" },
          { action: "Now the bottoms match — add!", math: "4/12 + 3/12 = 7/12" },
        ],
        answer: "7/12"
      },
      {
        concept: "Multiplying Fractions",
        desc: "Multiplying fractions is the easiest operation — just multiply tops together and bottoms together. No resizing needed! 'Half of a half' = a quarter (1/2 × 1/2 = 1/4).",
        problem: "Multiply:   2/3 × 3/5",
        steps: [
          { action: "Multiply the numerators (tops)", math: "2 × 3 = 6" },
          { action: "Multiply the denominators (bottoms)", math: "3 × 5 = 15" },
          { action: "Write as one fraction", math: "6/15" },
          { action: "Simplify — both divide by 3", math: "6÷3 / 15÷3 = 2/5" },
        ],
        answer: "2/5"
      },
      {
        concept: "Dividing Fractions",
        desc: "Dividing by a fraction means 'how many times does this fit?' There's a slick trick: flip the second fraction upside-down and multiply instead. Keep, change, flip!",
        problem: "Divide:   3/4 ÷ 1/2",
        steps: [
          { action: "Keep the first fraction as-is", math: "3/4" },
          { action: "Change ÷ to ×", math: "3/4  ×" },
          { action: "Flip the second fraction (1/2 → 2/1)", math: "3/4 × 2/1" },
          { action: "Multiply tops and bottoms, then simplify", math: "(3×2)/(4×1) = 6/4 = 3/2 = 1½" },
        ],
        answer: "3/2  (or 1½)"
      },
    ]
  },

  statistics: {
    label: "Statistics",
    icon: "σ",
    color: "#0c8fa8",
    lessons: [
      {
        concept: "Mean — The Average",
        desc: "The mean is what you get when you share equally. Imagine 5 friends with different amounts of candy — pour it all into one pile, split it evenly. That fair share is the mean.",
        problem: "Find the mean of: 4, 8, 6, 5, 7",
        steps: [
          { action: "Add all the numbers together", math: "4 + 8 + 6 + 5 + 7 = 30" },
          { action: "Count how many numbers there are", math: "5 numbers total" },
          { action: "Divide the sum by the count", math: "30 ÷ 5 = 6" },
        ],
        answer: "Mean = 6"
      },
      {
        concept: "Median — The Middle Value",
        desc: "The median is the one sitting in the exact middle of a sorted lineup. Sort everyone by height, stand them in a row — the person in the very middle is the median. It ignores wild outliers at the ends!",
        problem: "Find the median of: 3, 7, 1, 9, 4",
        steps: [
          { action: "Sort the numbers smallest to biggest", math: "1, 3, 4, 7, 9" },
          { action: "Find the middle position (5 numbers → position 3)", math: "1, 3,  [4],  7, 9" },
          { action: "The middle value is the median", math: "Median = 4" },
        ],
        answer: "Median = 4"
      },
      {
        concept: "Mode — The Most Popular",
        desc: "The mode is the number that shows up the most — like the most popular kid in class. A list can have one mode, many modes, or no mode. It's the only average that works for words too!",
        problem: "Find the mode of: 2, 5, 3, 2, 8, 5, 2, 1",
        steps: [
          { action: "Count appearances of each number", math: "2 appears 3×,  5 appears 2×,  rest appear 1×" },
          { action: "The most frequent number wins", math: "2 appears most (3 times)" },
        ],
        answer: "Mode = 2"
      },
      {
        concept: "Range — The Spread",
        desc: "Range tells you how spread out data is. Small range = values are close together (consistent). Big range = values vary a lot. It's the quickest way to measure 'how wild' your data is.",
        problem: "Find the range of test scores: 72, 85, 90, 61, 88",
        steps: [
          { action: "Find the highest score", math: "Maximum = 90" },
          { action: "Find the lowest score", math: "Minimum = 61" },
          { action: "Subtract smallest from largest", math: "Range = 90 − 61 = 29" },
        ],
        answer: "Range = 29"
      },
      {
        concept: "Probability — What Are the Chances?",
        desc: "Probability is how likely something is to happen. We write it as: favorable outcomes ÷ total outcomes. 0 = impossible, 1 = certain, ½ = 50/50 like a coin flip!",
        problem: "A bag has 3 red, 2 blue, 5 green marbles. Probability of pulling red?",
        steps: [
          { action: "Count the favorable outcomes (red marbles)", math: "3 red marbles" },
          { action: "Count all possible outcomes (total marbles)", math: "3 + 2 + 5 = 10 total" },
          { action: "Divide: favorable ÷ total", math: "P(red) = 3/10" },
          { action: "As a percent", math: "3/10 = 30% chance" },
        ],
        answer: "P = 3/10  (30%)"
      },
    ]
  },

  percentages: {
    label: "Percentages",
    icon: "%",
    color: "#c77b00",
    lessons: [
      {
        concept: "What Is a Percent?",
        desc: "Percent means 'out of 100.' Per = for every, cent = hundred (like cents in a dollar). So 40% means 40 out of every 100 — like if 40 out of 100 kids like chocolate ice cream.",
        problem: "What is 25% of 80?",
        steps: [
          { action: "Percent means divide by 100 — convert to decimal", math: "25% = 25 ÷ 100 = 0.25" },
          { action: "Multiply the decimal by the total", math: "0.25 × 80" },
          { action: "Calculate", math: "0.25 × 80 = 20" },
        ],
        answer: "20"
      },
      {
        concept: "Percent Increase",
        desc: "When something goes up in price or size, we ask: out of the original amount, how much was the change? That ratio × 100 is the percent increase.",
        problem: "A shirt costs $40. It goes up to $50. What's the percent increase?",
        steps: [
          { action: "Find how much it changed", math: "$50 − $40 = $10" },
          { action: "Divide that change by the ORIGINAL price", math: "$10 ÷ $40 = 0.25" },
          { action: "Multiply by 100 to get a percent", math: "0.25 × 100 = 25%" },
        ],
        answer: "25% increase"
      },
      {
        concept: "Finding the Original Price",
        desc: "Sometimes we know the sale price and the discount percentage, but want to know what it cost before. We work backwards — un-doing the discount.",
        problem: "A jacket is $60 after a 25% discount. What was the original price?",
        steps: [
          { action: "If 25% was removed, 75% remains", math: "100% − 25% = 75%" },
          { action: "The $60 represents 75% of the original", math: "$60 = 0.75 × original" },
          { action: "Divide both sides by 0.75", math: "original = $60 ÷ 0.75 = $80" },
        ],
        answer: "$80"
      },
      {
        concept: "Tip Math",
        desc: "Knowing percentages is super useful at restaurants. A 20% tip — how do you calculate it fast in your head? Move the decimal left to get 10%, then double it!",
        problem: "Calculate a 20% tip on a $35 bill.",
        steps: [
          { action: "Find 10% first — just divide by 10", math: "$35 ÷ 10 = $3.50" },
          { action: "20% is double that", math: "$3.50 × 2 = $7.00" },
          { action: "Total bill including tip", math: "$35 + $7 = $42" },
        ],
        answer: "$7 tip  →  $42 total"
      },
    ]
  },

  trigonometry: {
    label: "Trigonometry",
    icon: "θ",
    color: "#5856d6",
    lessons: [
      {
        concept: "What Is Sine?",
        desc: "Trig tools help with right triangles. Imagine tilting your head up at a tall building. You know the angle and how far you are from the base. Sine finds the height — without climbing it!",
        problem: "Angle = 30°, hypotenuse = 10. Find the opposite side.",
        steps: [
          { action: "SOH — Sine = Opposite ÷ Hypotenuse", math: "sin(angle) = opposite / hypotenuse" },
          { action: "Plug in what we know", math: "sin(30°) = opposite / 10" },
          { action: "sin(30°) = 0.5  (a known value)", math: "0.5 = opposite / 10" },
          { action: "Multiply both sides by 10", math: "opposite = 10 × 0.5 = 5" },
        ],
        answer: "Opposite = 5"
      },
      {
        concept: "What Is Cosine?",
        desc: "Cosine is for the side next to the angle. If sine finds 'how tall,' cosine finds 'how far away.' Together they can describe any direction in the universe!",
        problem: "Angle = 60°, hypotenuse = 14. Find the adjacent side.",
        steps: [
          { action: "CAH — Cosine = Adjacent ÷ Hypotenuse", math: "cos(angle) = adjacent / hypotenuse" },
          { action: "Plug in values", math: "cos(60°) = adjacent / 14" },
          { action: "cos(60°) = 0.5", math: "0.5 = adjacent / 14" },
          { action: "Multiply both sides by 14", math: "adjacent = 14 × 0.5 = 7" },
        ],
        answer: "Adjacent = 7"
      },
      {
        concept: "What Is Tangent?",
        desc: "Tangent compares opposite to adjacent directly — skipping the hypotenuse. Surveyors use this to measure mountain heights from far away with just an angle and a ground distance.",
        problem: "Angle = 45°, adjacent side = 8. Find the opposite side.",
        steps: [
          { action: "TOA — Tangent = Opposite ÷ Adjacent", math: "tan(angle) = opposite / adjacent" },
          { action: "Plug in values", math: "tan(45°) = opposite / 8" },
          { action: "tan(45°) = 1  (both sides equal at 45°!)", math: "1 = opposite / 8" },
          { action: "Multiply both sides by 8", math: "opposite = 8" },
        ],
        answer: "Opposite = 8"
      },
      {
        concept: "SOH-CAH-TOA",
        desc: "SOH-CAH-TOA is the cheat code for trig. It's a memory trick: Sine=Opposite/Hypotenuse, Cosine=Adjacent/Hypotenuse, Tangent=Opposite/Adjacent. Once this sticks, triangles become easy.",
        problem: "Find angle θ if opposite = 5 and hypotenuse = 13.",
        steps: [
          { action: "We have opposite and hypotenuse — that's Sine", math: "sin(θ) = 5 / 13" },
          { action: "Calculate the ratio", math: "5 ÷ 13 ≈ 0.3846" },
          { action: "Use inverse sine (sin⁻¹) to find the angle", math: "θ = sin⁻¹(0.3846)" },
          { action: "Evaluate", math: "θ ≈ 22.6°" },
        ],
        answer: "θ ≈ 22.6°"
      },
    ]
  },

  numbertheory: {
    label: "Number Theory",
    icon: "∞",
    color: "#1a7f47",
    lessons: [
      {
        concept: "Prime Numbers",
        desc: "A prime number is a loner — it can ONLY be divided evenly by 1 and itself. The first primes: 2, 3, 5, 7, 11, 13… they go on forever. Mathematicians have been obsessed with them for 2,000 years!",
        problem: "Is 37 a prime number?",
        steps: [
          { action: "Only check divisors up to √37 ≈ 6", math: "Check: 2, 3, 5" },
          { action: "Is 37 divisible by 2? (Is it even?)", math: "37 ÷ 2 = 18.5  ✗  not even" },
          { action: "Is 37 divisible by 3? (digit sum = 10)", math: "37 ÷ 3 = 12.3  ✗  no" },
          { action: "Is 37 divisible by 5? (ends in 0 or 5?)", math: "37 ends in 7  ✗  no → it's prime!" },
        ],
        answer: "Yes, 37 is prime"
      },
      {
        concept: "Greatest Common Factor",
        desc: "The GCF is the biggest number that divides into two numbers perfectly — like finding the largest identical group you can split both things into. Super useful for simplifying fractions!",
        problem: "Find the GCF of 24 and 36.",
        steps: [
          { action: "List all factors of 24", math: "1, 2, 3, 4, 6, 8, 12, 24" },
          { action: "List all factors of 36", math: "1, 2, 3, 4, 6, 9, 12, 18, 36" },
          { action: "Find the ones they share", math: "Common: 1, 2, 3, 4, 6, 12" },
          { action: "Pick the biggest one", math: "GCF = 12" },
        ],
        answer: "GCF = 12"
      },
      {
        concept: "Least Common Multiple",
        desc: "The LCM is the smallest number both values divide into evenly. Like finding the first time two buses arrive together — if one comes every 4 min and another every 6 min, they meet at minute 12.",
        problem: "Find the LCM of 4 and 6.",
        steps: [
          { action: "List multiples of 4", math: "4, 8, 12, 16, 20, 24…" },
          { action: "List multiples of 6", math: "6, 12, 18, 24, 30…" },
          { action: "First number appearing on both lists", math: "12  ✓" },
        ],
        answer: "LCM = 12"
      },
      {
        concept: "Even & Odd Patterns",
        desc: "Even numbers split into two equal groups perfectly. Odd numbers always have one left over. These simple ideas have surprisingly powerful patterns — odd + odd = always even. Try it!",
        problem: "Without calculating, is (27 × 34 + 15) even or odd?",
        steps: [
          { action: "27 is odd, 34 is even — odd × even = ?", math: "odd × even = always EVEN" },
          { action: "So 27 × 34 is even. Now add 15 (odd)", math: "even + odd = ?" },
          { action: "even + odd = always ODD", math: "Result is ODD  ✓" },
        ],
        answer: "Odd  (no calculator needed!)"
      },
    ]
  },

};

// ─── Subject list ─────────────────────────────────────────────────────────────

const ROTATION = [
  'algebra', 'geometry', 'fractions',
  'statistics', 'percentages', 'trigonometry', 'numbertheory'
];

// Pick a random lesson on every page load.
// If the user manually picks a subject, choose a random lesson from that subject.
function getTodayLesson(subjectOverride) {
  const subjectKey = subjectOverride || ROTATION[Math.floor(Math.random() * ROTATION.length)];
  const subject    = SUBJECTS[subjectKey];
  const lesson     = subject.lessons[Math.floor(Math.random() * subject.lessons.length)];
  return { subjectKey, subject, lesson };
}
