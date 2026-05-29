// ─── All lesson content ───────────────────────────────────────────────────────

const SUBJECTS = {

  algebra: {
    label: "Algebra",
    icon: "𝑥",
    color: "#0071e3",
    lessons: [
      {
        concept: "Solving for a Mystery Number",
        desc: "x is just a box with a secret number inside. Your job? Rip off the layers around it until it's naked. We do that by doing the same thing to BOTH sides — like when you split a bill 50/50, both people pay the same.",
        problem: "Solve for x:   3x + 7 = 22",
        steps: [
          {
            action: "Read it out loud first",
            math: "3x + 7 = 22",
            eli5: "This says: 'three copies of the mystery number, plus 7, lands on 22.' Your mission: find what x is hiding. Think of it like a locked box — we need to undo everything around it."
          },
          {
            action: "Get rid of the +7 by subtracting 7 from both sides",
            math: "3x = 22 − 7 = 15",
            eli5: "The +7 is in the way, so kick it off. But here's the rule: whatever you do to one side, you MUST do to the other — like a seesaw. Remove 7 kg from the left, remove 7 kg from the right, and it stays balanced. Now we have 3x = 15."
          },
          {
            action: "Divide both sides by 3",
            math: "x = 15 ÷ 3 = 5",
            eli5: "3x means '3 bags of x.' We want just ONE bag. So split 15 into 3 equal groups: 5, 5, 5. Each bag holds 5. x = 5! 🎉"
          },
          {
            action: "Plug x = 5 back in to double-check",
            math: "3(5) + 7 = 15 + 7 = 22  ✓",
            eli5: "Always verify — it takes 5 seconds and saves you from embarrassing mistakes on tests. Replace x with 5: does it equal 22? Yes! You're done."
          },
        ],
        answer: "x = 5"
      },
      {
        concept: "The Distributive Property",
        desc: "Imagine you're buying 4 combo meals, and each combo has a burger AND fries. You don't order 4 combos — you order 4 burgers and 4 fries separately. That's distribution: multiply the outside number by EVERYTHING inside the parentheses.",
        problem: "Expand and simplify:   4(2x − 3) + 6",
        steps: [
          {
            action: "Multiply 4 into the first thing inside",
            math: "4 × 2x = 8x",
            eli5: "The 4 outside is like a delivery driver who has to drop off a package at EVERY address inside the parentheses. First stop: 2x. Four deliveries of 2x = 8x."
          },
          {
            action: "Multiply 4 into the second thing inside",
            math: "4 × (−3) = −12",
            eli5: "Second stop: −3. Four deliveries of −3 = −12. Positive × negative = negative. If you owe someone $3 four times, you owe $12 total."
          },
          {
            action: "The +6 was outside — it just tags along",
            math: "8x − 12 + 6",
            eli5: "The +6 wasn't inside the parentheses, so the 4 never touched it. It shows up unchanged, like a friend who wasn't in the delivery zone."
          },
          {
            action: "Combine the plain numbers: −12 + 6",
            math: "8x − 6",
            eli5: "−12 + 6 = −6. Think: you owe $12 but someone gives you $6 back. You still owe $6. The 8x stays alone because you can't mix apples (x-terms) with dollars (plain numbers)."
          },
        ],
        answer: "8x − 6"
      },
      {
        concept: "Factoring a Trinomial",
        desc: "This is reverse LEGO. Someone already snapped the pieces together — your job is to figure out which two pieces were used. We're un-multiplying instead of multiplying.",
        problem: "Factor:   x² + 5x + 6",
        steps: [
          {
            action: "Find two numbers that multiply to 6",
            math: "Pairs: (1 × 6),  (2 × 3)",
            eli5: "List every pair of numbers whose product is the last number (6). Like finding all the ways to arrange 6 chairs into equal rows: 1×6 or 2×3."
          },
          {
            action: "Which pair also adds up to 5?",
            math: "1 + 6 = 7 ✗     2 + 3 = 5 ✓",
            eli5: "Now check: which pair's sum matches the middle number (5)? It's like a lock that needs TWO codes at once — multiply to 6 AND add to 5. Only 2 and 3 crack it."
          },
          {
            action: "Build the two brackets",
            math: "(x + 2)(x + 3)",
            eli5: "Slot each winning number into its own bracket with an x. It's the recipe that was used to bake x² + 5x + 6."
          },
          {
            action: "Verify by FOILing back out",
            math: "x² + 3x + 2x + 6 = x² + 5x + 6  ✓",
            eli5: "FOIL = First, Outer, Inner, Last. Multiply the brackets out and make sure you get back what you started with. It's like tasting your recipe to make sure it matches the original. Delicious. ✓"
          },
        ],
        answer: "(x + 2)(x + 3)"
      },
      {
        concept: "Two Equations, One Answer",
        desc: "You're a detective with two clues. Clue 1 alone doesn't solve it. Clue 2 alone doesn't solve it. But shove Clue 1 INTO Clue 2 and suddenly — boom — case solved. That's substitution.",
        problem: "Solve:   y = 2x + 1   and   3x + y = 16",
        steps: [
          {
            action: "Equation 1 hands us y on a silver platter",
            math: "y = 2x + 1",
            eli5: "The first equation basically says 'hey, y is just 2x + 1.' That's a free gift. We're going to use it as a swap card."
          },
          {
            action: "Swap y into equation 2",
            math: "3x + (2x + 1) = 16   →   5x + 1 = 16",
            eli5: "Everywhere you see y in equation 2, replace it with (2x + 1). Now there's only ONE unknown — x. It went from impossible to totally solvable in one step!"
          },
          {
            action: "Solve for x",
            math: "5x = 15   →   x = 3",
            eli5: "Subtract 1 from both sides: 5x = 15. Divide by 5: x = 3. Found him!"
          },
          {
            action: "Plug x = 3 back into equation 1 to find y",
            math: "y = 2(3) + 1 = 7",
            eli5: "Now that x is solved, substitute it back into the easy equation: y = 2×3 + 1 = 7. Case closed: x = 3, y = 7. 🕵️"
          },
        ],
        answer: "x = 3,  y = 7"
      },
      {
        concept: "The Quadratic Formula",
        desc: "When you throw a ball up in the air, it goes up AND comes back down — two events, two answers. Equations with x² can have two solutions too. The quadratic formula is the universal key that unlocks all of them.",
        problem: "Solve:   x² − 5x + 6 = 0",
        steps: [
          {
            action: "Label the ingredients: a, b, c",
            math: "a = 1,  b = −5,  c = 6",
            eli5: "Every quadratic looks like ax² + bx + c = 0. Match the pieces: number in front of x² → a, number in front of x → b, plain number → c. Watch out for negatives like b = −5!"
          },
          {
            action: "Write the formula — it always works",
            math: "x = (−b ± √(b²− 4ac)) / 2a",
            eli5: "This formula is like a cheat code that works on EVERY quadratic. The ± means you'll run it twice — once with + and once with −. That's where the two answers come from."
          },
          {
            action: "Calculate what's under the square root first",
            math: "(−5)² − 4(1)(6) = 25 − 24 = 1  →  √1 = 1",
            eli5: "This part is called the discriminant. If it's positive → 2 answers. Zero → 1 answer. Negative → no real answers (ball never lands!). Ours is 1, so we get 2 answers."
          },
          {
            action: "Compute both answers using + and −",
            math: "x = (5+1)/2 = 3   or   x = (5−1)/2 = 2",
            eli5: "Plug in: −b = 5, √1 = 1, 2a = 2. Answer 1: (5+1)/2 = 3. Answer 2: (5−1)/2 = 2. The ball left at x=2 and landed at x=3!"
          },
        ],
        answer: "x = 2  or  x = 3"
      },
      {
        concept: "Slope — How Steep Is the Hill?",
        desc: "Slope tells you how steep a line is. A flat road = slope 0. A gentle hill = slope 0.5. A near-vertical cliff = slope 10. We measure it as 'how many steps up for every 1 step sideways.'",
        problem: "Find the slope through points (1, 3) and (4, 9)",
        steps: [
          {
            action: "Slope = rise ÷ run",
            math: "m = (y₂ − y₁) / (x₂ − x₁)",
            eli5: "Rise = how much you go up (or down). Run = how much you go sideways. Slope tells you the ratio. Hiking up a mountain: if you climb 2 meters for every 1 meter forward, slope = 2."
          },
          {
            action: "Label the points and plug them in",
            math: "m = (9 − 3) / (4 − 1)",
            eli5: "First point: (x₁, y₁) = (1, 3). Second point: (x₂, y₂) = (4, 9). Subtract in the same order for both — second minus first. Don't mix them up!"
          },
          {
            action: "Simplify the fraction",
            math: "m = 6 / 3 = 2",
            eli5: "The line rises 6 units while going 3 units to the right. 6 ÷ 3 = 2. For every step right, you go up 2 steps — like a steep staircase."
          },
          {
            action: "What does slope 2 actually feel like?",
            math: "→ 1 step right,  ↑ 2 steps up  📈",
            eli5: "Slope 2 is a solid hill. For comparison: a wheelchair ramp is about slope 0.08. A ski slope is around slope 0.5–1. Slope 2 would be a very aggressive staircase!"
          },
        ],
        answer: "m = 2"
      },
      {
        concept: "Combining Like Terms",
        desc: "You can add apples to apples and oranges to oranges — but NOT apples to oranges. Same rule in algebra: only combine terms that have the exact same variable and power.",
        problem: "Simplify:   5x² + 3x − 2x² + 7 − x",
        steps: [
          {
            action: "Collect all the x² terms",
            math: "5x² − 2x² = 3x²",
            eli5: "Think of x² as a specific type of fruit — let's say mangoes. 5 mangoes minus 2 mangoes = 3 mangoes. Easy!"
          },
          {
            action: "Collect all the plain x terms",
            math: "3x − x = 2x",
            eli5: "x is a different fruit — let's say apples. 3 apples minus 1 apple = 2 apples. Note: a lone −x means −1x."
          },
          {
            action: "The number 7 rides solo",
            math: "+ 7",
            eli5: "7 is just a plain number with no fruit attached. There's no other plain number to combine it with, so it stays as-is. Like a random banana in your fruit bowl."
          },
          {
            action: "Write the final answer",
            math: "3x² + 2x + 7",
            eli5: "Line them up in order: highest power first (x²), then x, then the plain number. This is called standard form — it's just the polished, tidy version of your answer."
          },
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
        desc: "Imagine a grilled cheese sandwich cut diagonally. That triangle is EXACTLY half the original rectangle. No matter what triangle you draw, you can always complete it into a rectangle — and the triangle is always half. That's where ½ × base × height comes from.",
        problem: "Find the area of a triangle with base 10 cm and height 6 cm.",
        diagram: "triangle",
        steps: [
          {
            action: "A triangle = exactly half a rectangle",
            math: "A = ½ × base × height",
            eli5: "Take any triangle. Duplicate it, flip the copy, and snap it to the original — you always get a parallelogram (basically a rectangle). So the triangle is always half. The ½ isn't magic, it's just geometry being honest."
          },
          {
            action: "Plug in base = 10, height = 6",
            math: "A = ½ × 10 × 6",
            eli5: "The height isn't the slanted side — it's the straight-up perpendicular distance from the base to the tip. Like measuring how tall a tent is, not how long the slanted fabric is."
          },
          {
            action: "Multiply it out",
            math: "A = ½ × 60 = 30 cm²",
            eli5: "10 × 6 = 60, then half of 60 = 30. That's 30 square centimeters — about the size of a large Post-it note."
          },
        ],
        answer: "A = 30 cm²"
      },
      {
        concept: "The Pythagorean Theorem",
        desc: "This 2,500-year-old formula lets you find any missing side of a right triangle — no measuring tape needed. Builders, architects, and GPS systems use it every single day.",
        problem: "A right triangle has legs of 6 and 8. Find the hypotenuse.",
        diagram: "right-triangle",
        steps: [
          {
            action: "The rule: a² + b² = c²",
            math: "a² + b² = c²",
            eli5: "Only works for right triangles (the ones with a 90° corner, marked with a little square). a and b are the two shorter sides (legs). c is the hypotenuse — always the longest side, always across from the 90° corner."
          },
          {
            action: "Square both legs and add them",
            math: "6² + 8² = 36 + 64 = 100",
            eli5: "6² = 36. 8² = 64. Add: 36 + 64 = 100. So we know c² = 100. Now we just need to find what number times itself = 100."
          },
          {
            action: "Take the square root",
            math: "c = √100 = 10",
            eli5: "√100 = 10 because 10 × 10 = 100. The hypotenuse is 10! In real life: if a TV is 6 inches tall and 8 inches wide, the diagonal screen size is exactly 10 inches."
          },
          {
            action: "This is the famous 3-4-5 family",
            math: "6-8-10 is just 2 × (3-4-5)  ✓",
            eli5: "Certain combos always work perfectly: (3,4,5), (5,12,13), (8,15,17). Builders memorize these to check if their corners are actually 90° without a protractor!"
          },
        ],
        answer: "c = 10"
      },
      {
        concept: "Circumference of a Circle",
        desc: "If you cut a bicycle tire and unrolled it flat, how long would it be? That length is the circumference. It's always exactly π times the diameter — doesn't matter if it's a coin or a planet.",
        problem: "Find the circumference of a circle with radius 7 cm. (π ≈ 3.14)",
        diagram: "circle",
        steps: [
          {
            action: "The formula: C = 2πr",
            math: "C = 2πr",
            eli5: "Radius = center to edge. Diameter = all the way across = 2r. Circumference = π × diameter = 2πr. π (pi) is roughly 3.14159… it goes on forever — it's one of math's most famous irrational numbers."
          },
          {
            action: "Plug in r = 7 and π ≈ 3.14",
            math: "C = 2 × 3.14 × 7",
            eli5: "We use 3.14 as a close-enough stand-in for π. (The real π never ends — NASA uses it to 15 decimal places for spacecraft navigation!)"
          },
          {
            action: "Multiply step by step",
            math: "C = 6.28 × 7 = 43.96 cm",
            eli5: "2 × 3.14 = 6.28 first, then × 7 = 43.96. So you'd need about 44 cm of string to wrap once around this circle."
          },
        ],
        answer: "C ≈ 43.96 cm"
      },
      {
        concept: "Angles Inside a Polygon",
        desc: "Here's a cool trick: ANY polygon can be sliced into triangles from one corner. Each triangle has 180°. So just count the triangles and multiply. A hexagon hides 4 triangles inside it!",
        problem: "Find the sum of interior angles of a hexagon (6 sides).",
        diagram: "hexagon",
        steps: [
          {
            action: "The formula: (n − 2) × 180°",
            math: "Sum = (n − 2) × 180°",
            eli5: "Draw a hexagon. Pick one corner and draw lines to all the non-adjacent corners. You'll carve it into triangles. A 4-sided shape makes 2 triangles. 5-sided → 3 triangles. Always (n−2) triangles."
          },
          {
            action: "Hexagon has 6 sides, so n = 6",
            math: "Sum = (6 − 2) × 180°",
            eli5: "Plug in: 6 − 2 = 4. Four triangles hiding inside every hexagon! Honeycombs are hexagonal because this angle distribution makes them incredibly strong and space-efficient."
          },
          {
            action: "Calculate",
            math: "Sum = 4 × 180° = 720°",
            eli5: "4 × 180 = 720°. Divided by 6 corners = 120° per corner. That's why honeycomb tiles fit together perfectly — 3 corners meeting at a point = 3 × 120° = 360°. Nature's a math genius!"
          },
        ],
        answer: "Sum = 720°"
      },
      {
        concept: "Area of a Circle",
        desc: "π sneaks in again! The area formula πr² is one of the most famous in all of math. It tells you how much 'floor space' is inside a circle — like figuring out how many tiles you need for a circular pizza oven.",
        problem: "Find the area of a circle with radius 5 m. (π ≈ 3.14)",
        diagram: "circle",
        steps: [
          {
            action: "The formula: A = πr²",
            math: "A = πr²",
            eli5: "r² means radius × radius. Then multiply by π. Fun fact: a square with side r has area r². A circle with the same radius has area πr² ≈ 3.14r². So the circle is about 3.14 times bigger than r² — π is that stretching factor."
          },
          {
            action: "Square the radius first (exponent before multiply!)",
            math: "5² = 25",
            eli5: "Order of operations: deal with the exponent before multiplying by π. 5² = 5 × 5 = 25. Imagine a 5×5 square of floor tiles. Now we're about to convert that into a circle's worth."
          },
          {
            action: "Multiply by π",
            math: "A = 3.14 × 25 = 78.5 m²",
            eli5: "3.14 × 25: do 3 × 25 = 75, then 0.14 × 25 = 3.5, add them: 78.5 m². That's roughly the floor area of a small bedroom — which is a lot of space for a circle with only a 5m radius!"
          },
        ],
        answer: "A ≈ 78.5 m²"
      },
      {
        concept: "Perimeter — The Fencing Problem",
        desc: "Perimeter is how far you'd walk if you traced the exact outline of a shape without lifting your feet. Want to fence your yard? Rope off a running track? That's perimeter math.",
        problem: "Find the perimeter of a rectangle 9 cm long and 4 cm wide.",
        diagram: "rectangle",
        steps: [
          {
            action: "A rectangle has two pairs of equal sides",
            math: "P = 2 × length + 2 × width",
            eli5: "Opposite sides of a rectangle are always equal. Instead of adding all 4 sides separately (9+4+9+4), just double each unique measurement. Less math, same answer."
          },
          {
            action: "Plug in 9 cm and 4 cm",
            math: "P = 2(9) + 2(4) = 18 + 8",
            eli5: "Two long sides: 2 × 9 = 18 cm. Two short sides: 2 × 4 = 8 cm. If you were buying fence panels, you'd need 18 cm worth of long panels and 8 cm of short ones."
          },
          {
            action: "Add them up",
            math: "P = 26 cm",
            eli5: "18 + 8 = 26 cm total. That's your fence length, your running track distance, your ribbon-around-the-box measurement. Perimeter is always a distance (cm, m, feet — never cm²)."
          },
        ],
        answer: "P = 26 cm"
      },
      {
        concept: "Supplementary Angles",
        desc: "Two angles are supplementary when they sit side-by-side and together make a perfectly flat straight line. A straight line = 180°. Knowing one angle immediately tells you its partner — no measuring needed.",
        problem: "Angle A and Angle B make a straight line. Angle A = 65°. Find Angle B.",
        steps: [
          {
            action: "A straight line always = 180°",
            math: "A + B = 180°",
            eli5: "A full rotation is 360°. A straight line is half of that: 180°. When two angles sit on a straight line, they have to share those 180° between them — no matter what."
          },
          {
            action: "Plug in A = 65°",
            math: "65° + B = 180°",
            eli5: "We know one angle grabbed 65° of the 180°. The other angle gets whatever is left. It's like splitting a 180-dollar bill when your friend already paid $65."
          },
          {
            action: "Subtract to find B",
            math: "B = 180° − 65° = 115°",
            eli5: "180 − 65 = 115. Angle B = 115°. Quick sanity check: 65 + 115 = 180. ✓ That's a wider-than-a-right-angle opening — like a door swung past 90° but not yet fully flat."
          },
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
        concept: "Simplifying Fractions",
        desc: "12/18 and 2/3 are the exact same amount — just written differently. It's like saying 'twelve out of eighteen slices' vs 'two out of three slices' — same fraction of the pizza, different language. Simplifying just finds the simplest way to say it.",
        problem: "Simplify the fraction:   12/18",
        steps: [
          {
            action: "Find a number that divides evenly into BOTH top and bottom",
            math: "Both 12 and 18 are divisible by 6",
            eli5: "We want the biggest number that fits into both without a remainder. Test 6: 12 ÷ 6 = 2 ✓, 18 ÷ 6 = 3 ✓. Jackpot! This is called the Greatest Common Factor (GCF)."
          },
          {
            action: "Divide the top by 6",
            math: "12 ÷ 6 = 2",
            eli5: "The top (numerator) goes from 12 to 2. You're not changing the fraction's value — you're just shrinking the numbers while keeping the ratio the same. Like resizing a photo."
          },
          {
            action: "Divide the bottom by 6",
            math: "18 ÷ 6 = 3",
            eli5: "The bottom (denominator) goes from 18 to 3. Both went down by the same factor, so the fraction is still worth the same. 12/18 = 2/3. Same piece of pie, smaller numbers."
          },
          {
            action: "Can 2/3 simplify further?",
            math: "2 and 3 share no common factor → fully simplified!",
            eli5: "2 is prime. 3 is prime. They don't share any factor except 1. Can't simplify further. 2/3 is the simplest, cleanest way to write this fraction. Done! ✅"
          },
        ],
        answer: "2/3"
      },
      {
        concept: "Adding Fractions (Same Denominator)",
        desc: "Adding fractions is like adding slices of pizza — but only if they're the same size. If you cut one pizza into 4 and another into 8, you can't just count slices. When the slices are the same size (same denominator), just count them!",
        problem: "Add:   1/4 + 2/4",
        steps: [
          {
            action: "Check: same denominator?",
            math: "Both have 4 — same-sized slices!  ✓",
            eli5: "The denominator (bottom number) tells you the slice size. Both say '4,' meaning both pizzas were cut into 4 equal pieces. We're adding the same-size slices, so we can count freely."
          },
          {
            action: "Add the tops, keep the bottom",
            math: "1 + 2 = 3,  keep the 4",
            eli5: "1 slice + 2 slices = 3 slices. The slice size (4) doesn't change just because you combined them. It's like saying: 1 quarter + 2 quarters = 3 quarters."
          },
          {
            action: "Write the result",
            math: "3/4",
            eli5: "You now have 3 out of 4 pieces. Three quarters of a pizza! 🍕"
          },
          {
            action: "Can it simplify? Check 3 and 4",
            math: "3 and 4 share no common factor → 3/4 is fully simplified ✓",
            eli5: "3 is prime. 4 = 2². No shared factors. 3/4 is already as simple as it gets."
          },
        ],
        answer: "3/4"
      },
      {
        concept: "Adding Unlike Fractions",
        desc: "Imagine trying to add a slice from a pizza cut into 3 pieces and a slice from a pizza cut into 4 pieces. You can't just say '2 slices' — the slices are different sizes! You have to re-cut everything to the same size first.",
        problem: "Add:   1/3 + 1/4",
        steps: [
          {
            action: "Find a common denominator",
            math: "3 × 4 = 12  →  convert everything to 12ths",
            eli5: "We need a size both 3 and 4 can divide into. Easiest trick: multiply the two denominators (3 × 4 = 12). Now we re-cut both pizzas into 12 equal pieces."
          },
          {
            action: "Convert 1/3 into twelfths",
            math: "1/3 = 4/12   (× top and bottom by 4)",
            eli5: "To go from 3 slices to 12, you multiply by 4. Do the same to the top: 1 × 4 = 4. So 1/3 = 4/12. Same amount, just cut into more pieces. Like re-cutting a third of a pizza into 4 smaller bits."
          },
          {
            action: "Convert 1/4 into twelfths",
            math: "1/4 = 3/12   (× top and bottom by 3)",
            eli5: "To go from 4 to 12, multiply by 3. Top: 1 × 3 = 3. So 1/4 = 3/12. Now both fractions have 12 as denominator — they're the same slice size!"
          },
          {
            action: "Add the tops — now they match!",
            math: "4/12 + 3/12 = 7/12",
            eli5: "4 twelfths + 3 twelfths = 7 twelfths. Does 7/12 simplify? 7 is prime and doesn't divide into 12. So 7/12 is our final answer — you just combined a third and a quarter of a pizza! 🍕"
          },
        ],
        answer: "7/12"
      },
      {
        concept: "Multiplying Fractions",
        desc: "Multiplying fractions means 'a fraction OF another fraction.' Half of a pizza, then you eat half of THAT — you get a quarter. 1/2 × 1/2 = 1/4. No messy denominator matching needed!",
        problem: "Multiply:   2/3 × 3/5",
        steps: [
          {
            action: "Multiply the tops together",
            math: "2 × 3 = 6",
            eli5: "Top × top. That's it! No finding common denominators — that's only for adding and subtracting. Multiplication is way simpler."
          },
          {
            action: "Multiply the bottoms together",
            math: "3 × 5 = 15",
            eli5: "Bottom × bottom. Think about it: if you take 2/3 of 3/5 of a chocolate bar, you're looking at smaller and smaller pieces. The denominator grows to reflect that."
          },
          {
            action: "You now have 6/15 — but can it simplify?",
            math: "6/15 — both divisible by 3",
            eli5: "6 ÷ 3 = 2. 15 ÷ 3 = 5. Simplify whenever you can — it keeps answers clean. 6/15 = 2/5."
          },
          {
            action: "Final answer",
            math: "2/5",
            eli5: "Two-thirds of three-fifths of a chocolate bar = two-fifths of the whole bar. Makes sense — you took a portion of a portion, so the result is smaller than either original!"
          },
        ],
        answer: "2/5"
      },
      {
        concept: "Dividing Fractions",
        desc: "Dividing by a fraction sounds scary but there's a slick trick: KEEP the first fraction, CHANGE ÷ to ×, FLIP the second fraction. Then just multiply. Sounds weird, works perfectly, every time.",
        problem: "Divide:   3/4 ÷ 1/2",
        steps: [
          {
            action: "KEEP: leave the first fraction alone",
            math: "3/4  ←  don't touch this",
            eli5: "The question is: how many halves fit inside three-quarters? Like: if cupcakes come in packs of ½, how many packs fit in 3/4 of a box? Keep the 3/4."
          },
          {
            action: "CHANGE: flip ÷ to ×",
            math: "3/4  ×  ...",
            eli5: "Swap the division sign for multiplication. Dividing by something is the same as multiplying by its 'opposite.' The flip in the next step compensates for this swap."
          },
          {
            action: "FLIP: flip the second fraction",
            math: "1/2  →  2/1",
            eli5: "Swap the top and bottom of the second fraction. 1/2 becomes 2/1 (which is just 2). This is called the reciprocal. Now: 3/4 × 2/1."
          },
          {
            action: "Multiply and simplify",
            math: "(3×2)/(4×1) = 6/4 = 3/2 = 1½",
            eli5: "3×2 = 6 on top, 4×1 = 4 on bottom. 6/4 simplifies to 3/2. As a mixed number: 1½. So 1.5 half-cupcake packs fit into three-quarters of a box. Keep-Change-Flip — never forget it! 🧁"
          },
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
        concept: "Mean — The Fair Share",
        desc: "Five friends pooled their money: $4, $8, $6, $5, $7. If they split it evenly, how much does each get? That equal share is the mean. It's math's idea of fairness.",
        problem: "Find the mean of: 4, 8, 6, 5, 7",
        steps: [
          {
            action: "Dump everything into one pile",
            math: "4 + 8 + 6 + 5 + 7 = 30",
            eli5: "Imagine sweeping all the money into one stack. 4+8=12, +6=18, +5=23, +7=30. Total pile: $30."
          },
          {
            action: "Count how many people (numbers)",
            math: "5 numbers",
            eli5: "Five friends. Five values. Counting correctly matters — one wrong count ruins your average."
          },
          {
            action: "Split the pile equally",
            math: "30 ÷ 5 = 6",
            eli5: "$30 split among 5 friends = $6 each. Mean = 6. Notice: the mean (6) doesn't have to be one of the original numbers. It's the hypothetical 'if everyone had the same.'"
          },
        ],
        answer: "Mean = 6"
      },
      {
        concept: "Median — The Middle Child",
        desc: "Line up 5 people by height. The one standing in the middle is the median. They're not the tallest or shortest — just the middle. Unlike the mean, one giant outlier doesn't throw it off.",
        problem: "Find the median of: 3, 7, 1, 9, 4",
        steps: [
          {
            action: "Sort from smallest to biggest — mandatory!",
            math: "1, 3, 4, 7, 9",
            eli5: "You can't find the middle without lining everyone up first. Unsorted, '3' happens to be second — but it's NOT the middle. Sort first, always."
          },
          {
            action: "Find the true middle position",
            math: "5 values → middle is position 3",
            eli5: "With 5 values, position 3 is the center (2 values on each side). Formula: (n+1)/2 = (5+1)/2 = 3."
          },
          {
            action: "Read off that value",
            math: "1, 3,  [4],  7, 9   →   Median = 4",
            eli5: "The 3rd value in the sorted list is 4. That's our median! Even if the last value were 9,000,000 instead of 9, the median would still be 4. That's its superpower — it ignores crazy outliers."
          },
        ],
        answer: "Median = 4"
      },
      {
        concept: "Mode — The Fan Favorite",
        desc: "If your data were a popularity contest, the mode wins. It's the number that appears the most — like the most-ordered item on a restaurant menu. You can have 0, 1, or multiple modes.",
        problem: "Find the mode of: 2, 5, 3, 2, 8, 5, 2, 1",
        steps: [
          {
            action: "Tally up how many times each value appears",
            math: "2 → 3×,   5 → 2×,   3 → 1×,   8 → 1×,   1 → 1×",
            eli5: "Go through the list like you're counting votes. Every time a number shows up, it gets a tally mark. 2 gets the most votes!"
          },
          {
            action: "The most frequent value wins",
            math: "2 appears 3 times — no one else comes close",
            eli5: "2 is the mode! If 5 also appeared 3 times, we'd have two modes (bimodal). If everything appeared once, there'd be no mode. The mode is the crowd's favorite."
          },
        ],
        answer: "Mode = 2"
      },
      {
        concept: "Range — How Wild Is the Data?",
        desc: "If one kid scored 61 and another scored 90 on the same test, something interesting is going on. Range captures that spread — the higher it is, the more wildly different your data points are.",
        problem: "Find the range of test scores: 72, 85, 90, 61, 88",
        steps: [
          {
            action: "Spot the highest score",
            math: "Maximum = 90",
            eli5: "Scan for the biggest number. 90 beats 72, 85, 61, and 88. Max = 90."
          },
          {
            action: "Spot the lowest score",
            math: "Minimum = 61",
            eli5: "Scan for the smallest. 61 is the weakest score in the group. Min = 61."
          },
          {
            action: "Subtract: high minus low",
            math: "Range = 90 − 61 = 29",
            eli5: "Range = 29 points. The best student outscored the worst by 29 points. A range of 5 would mean everyone scored very similarly — a tight class. Range of 29 means big differences in preparation!"
          },
        ],
        answer: "Range = 29"
      },
      {
        concept: "Probability — What Are the Odds?",
        desc: "You're reaching into a bag of marbles without looking. What's the chance you grab a red one? Probability = favorable outcomes ÷ total outcomes. From 0 (impossible) to 1 (guaranteed). A coin flip is 0.5.",
        problem: "A bag has 3 red, 2 blue, 5 green marbles. Probability of pulling red?",
        steps: [
          {
            action: "Count the winning outcomes (red marbles)",
            math: "3 red marbles",
            eli5: "There are 3 red marbles. These are the outcomes we WANT — the 'favorable' ones. Every time you reach in, 3 out of all marbles could give you red."
          },
          {
            action: "Count EVERY possible outcome",
            math: "3 + 2 + 5 = 10 total marbles",
            eli5: "Ten marbles total. Each one has an equal shot of being grabbed (assuming you don't peek). Total possibilities = 10."
          },
          {
            action: "Divide: winners ÷ total",
            math: "P(red) = 3/10 = 0.3",
            eli5: "3 winners out of 10 possibilities = 3/10 = 0.3. Reach into that bag 10 times (putting the marble back each time), and you'd expect red about 3 times."
          },
          {
            action: "Convert to a percentage",
            math: "0.3 × 100 = 30%",
            eli5: "30% chance of red. For context: 50% = coin flip, 1% = lottery ticket (much worse). 30% means it'll happen roughly once every 3-ish tries."
          },
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
        desc: "Percent literally means 'per hundred' — like cents in a dollar. 25% means 25 out of every 100. If 25 out of 100 students prefer chocolate milk, that's 25%. Simple as that.",
        problem: "What is 25% of 80?",
        steps: [
          {
            action: "Convert percent → decimal",
            math: "25% = 25 ÷ 100 = 0.25",
            eli5: "Percent always means ÷100. Move the decimal 2 spots left: 25% → 0.25. Helpful patterns: 50% = 0.5, 10% = 0.1, 1% = 0.01."
          },
          {
            action: "'Of' means multiply",
            math: "0.25 × 80",
            eli5: "In math, 'of' = ×. So '25% of 80' = 0.25 × 80. Think of 0.25 as one quarter. One quarter of 80 is..."
          },
          {
            action: "Calculate",
            math: "0.25 × 80 = 20",
            eli5: "80 ÷ 4 = 20. Or: 0.25 × 80 = 20. Either way: 25% of 80 is 20. Like: a 25% discount on an $80 jacket saves you $20."
          },
        ],
        answer: "20"
      },
      {
        concept: "Percent Increase",
        desc: "You bought a used car for $8,000 and sold it for $10,000. Great! But how much did it increase percentage-wise? We always compare the change to the ORIGINAL price — not the new one.",
        problem: "A shirt costs $40. It goes up to $50. What's the percent increase?",
        steps: [
          {
            action: "Find the actual change",
            math: "$50 − $40 = $10",
            eli5: "How much did it actually change in dollars? $50 − $40 = $10. The price went up $10."
          },
          {
            action: "Divide the change by the ORIGINAL price",
            math: "$10 ÷ $40 = 0.25",
            eli5: "Divide by the ORIGINAL (what it was BEFORE). This is the step people always mess up — dividing by the new price gives you the wrong answer. $10 is 0.25 of $40."
          },
          {
            action: "Multiply by 100 to get a percent",
            math: "0.25 × 100 = 25%",
            eli5: "0.25 → 25%. The shirt went up 25% in price. If you earned $40,000 and got a 25% raise, you'd earn $10,000 more — same math!"
          },
        ],
        answer: "25% increase"
      },
      {
        concept: "Finding the Original Price",
        desc: "The jacket's already on sale — but what did it USED to cost? We know the sale price and the discount percentage. Time to work backwards and un-do the discount.",
        problem: "A jacket is $60 after a 25% discount. What was the original price?",
        steps: [
          {
            action: "If 25% is off, 75% remains",
            math: "100% − 25% = 75%",
            eli5: "You removed 25% of the price. That means 75% of the original price is still there. The $60 you're paying IS that 75%."
          },
          {
            action: "Set up the equation",
            math: "0.75 × original = $60",
            eli5: "75% as a decimal = 0.75. So: 0.75 × original = $60. We want to find 'original.'"
          },
          {
            action: "Divide to find the original",
            math: "original = $60 ÷ 0.75 = $80",
            eli5: "$60 ÷ 0.75 = $80. The jacket used to cost $80. Verify: 25% of $80 = $20 off. $80 − $20 = $60. ✓ Now you know the store's markup!"
          },
        ],
        answer: "$80"
      },
      {
        concept: "Tip Math",
        desc: "You just had a great meal. The bill is $35. Your server was awesome — leave 20%. How do you calculate it fast without pulling out a calculator? Move the decimal, double it. Done.",
        problem: "Calculate a 20% tip on a $35 bill.",
        steps: [
          {
            action: "Find 10% first — shift the decimal left",
            math: "$35 → $3.50",
            eli5: "10% of anything = divide by 10. Just move the decimal one place left. $35.00 → $3.50. No calculator, instant answer."
          },
          {
            action: "Double it to get 20%",
            math: "$3.50 × 2 = $7.00",
            eli5: "20% = 2 × 10%. So double your 10% answer. $3.50 × 2 = $7. Bonus hack: 15% tip = 10% + half of 10% = $3.50 + $1.75 = $5.25."
          },
          {
            action: "Add tip to the bill",
            math: "$35 + $7 = $42 total",
            eli5: "Tip = $7. Total = $42. You just calculated that in your head, at the table, faster than anyone else. That's the power of percentages. 💪"
          },
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
        desc: "You're standing 10 meters from a tall tree. You look up at a 30° angle to see the top. How tall is the tree? Sine solves this — without climbing it, without measuring it. Just an angle and a distance.",
        problem: "Angle = 30°, hypotenuse = 10. Find the opposite side.",
        steps: [
          {
            action: "SOH: Sine = Opposite / Hypotenuse",
            math: "sin(θ) = opposite / hypotenuse",
            eli5: "SOH is your memory hook. In a right triangle: the 'opposite' side faces the angle, the 'hypotenuse' is the longest side (across from 90°). Sine is their ratio."
          },
          {
            action: "Plug in what we know",
            math: "sin(30°) = opposite / 10",
            eli5: "We know the angle (30°) and the hypotenuse (10m). We're solving for the opposite side — the tree's height, in our example."
          },
          {
            action: "sin(30°) = 0.5 — memorize this one",
            math: "0.5 = opposite / 10",
            eli5: "A few trig values are worth memorizing: sin(30°) = 0.5, sin(45°) ≈ 0.71, sin(60°) ≈ 0.87, sin(90°) = 1. No calculator needed for these!"
          },
          {
            action: "Multiply both sides by 10",
            math: "opposite = 10 × 0.5 = 5",
            eli5: "The tree is 5 meters tall. We figured that out from 10 meters away just by measuring the angle. That's exactly how surveyors and architects work in real life!"
          },
        ],
        answer: "Opposite = 5"
      },
      {
        concept: "What Is Cosine?",
        desc: "If sine finds the height (vertical), cosine finds the horizontal distance. Together they can describe any direction in 2D space. GPS satellites use sin and cos millions of times per second.",
        problem: "Angle = 60°, hypotenuse = 14. Find the adjacent side.",
        steps: [
          {
            action: "CAH: Cosine = Adjacent / Hypotenuse",
            math: "cos(θ) = adjacent / hypotenuse",
            eli5: "The 'adjacent' side is the one right next to the angle (touching it, but not the hypotenuse). CAH = Cosine, Adjacent, Hypotenuse. Like sine's horizontal twin."
          },
          {
            action: "Plug in the values",
            math: "cos(60°) = adjacent / 14",
            eli5: "Angle = 60°, hypotenuse = 14. We want the adjacent side — the horizontal ground distance in our tree example."
          },
          {
            action: "cos(60°) = 0.5",
            math: "0.5 = adjacent / 14",
            eli5: "Coincidence: sin(30°) = cos(60°) = 0.5. They're mirror images! That's because in a right triangle, the two non-90° angles add to 90°, so they share each other's trig values."
          },
          {
            action: "Solve for adjacent",
            math: "adjacent = 14 × 0.5 = 7",
            eli5: "The adjacent side = 7. So the horizontal distance is 7 units when the hypotenuse is 14 and the angle is 60°."
          },
        ],
        answer: "Adjacent = 7"
      },
      {
        concept: "What Is Tangent?",
        desc: "You want to know how tall a building is. You're standing 8 meters away and measure a 45° angle to the top. Tangent skips the hypotenuse entirely — it directly compares height to ground distance.",
        problem: "Angle = 45°, adjacent side = 8. Find the opposite side.",
        steps: [
          {
            action: "TOA: Tangent = Opposite / Adjacent",
            math: "tan(θ) = opposite / adjacent",
            eli5: "No hypotenuse needed! Tangent directly compares the vertical (opposite) to the horizontal (adjacent). Great for surveying: you know your distance from the building, you measure the angle — done."
          },
          {
            action: "Plug in what we know",
            math: "tan(45°) = opposite / 8",
            eli5: "Angle = 45°. Ground distance (adjacent) = 8m. Building height (opposite) = unknown."
          },
          {
            action: "tan(45°) = 1 exactly — a special case",
            math: "1 = opposite / 8",
            eli5: "At exactly 45°, opposite = adjacent. They're equal! That's why tan(45°) = 1. A 45° angle means you're as far from the building as the building is tall — it's a perfect diagonal."
          },
          {
            action: "Solve",
            math: "opposite = 8 × 1 = 8",
            eli5: "The building is 8 meters tall and you're 8 meters away. Standing at 45° makes perfect sense — you'd be looking at exactly a 45° diagonal. Trig confirmed! 🏢"
          },
        ],
        answer: "Opposite = 8"
      },
      {
        concept: "SOH-CAH-TOA",
        desc: "SOH-CAH-TOA is the password to trig. It's a mnemonic (memory trick) for the three trig ratios. Burn this into your brain and right triangles become trivial — for life.",
        problem: "Find angle θ if opposite = 5 and hypotenuse = 13.",
        steps: [
          {
            action: "Identify what you have: opposite + hypotenuse = Sine",
            math: "sin(θ) = 5/13",
            eli5: "Match what you know to SOH-CAH-TOA. We have the opposite (5) and the hypotenuse (13). That's SOH → use Sine. sin(θ) = opposite/hypotenuse = 5/13."
          },
          {
            action: "Calculate the decimal",
            math: "5 ÷ 13 ≈ 0.3846",
            eli5: "Divide: 5 ÷ 13 ≈ 0.3846. This is the sine value of our mystery angle. Now we need to run it backwards — find the angle that has this sine."
          },
          {
            action: "Use inverse sine to find the angle",
            math: "θ = sin⁻¹(0.3846)",
            eli5: "sin⁻¹ (also called arcsin) undoes sine — like how ÷ undoes ×. On a calculator: press [2nd] + [sin] + [0.3846]. This asks: 'what angle has a sine of 0.3846?'"
          },
          {
            action: "Evaluate",
            math: "θ ≈ 22.6°",
            eli5: "The angle is about 22.6°. Verify: sin(22.6°) ≈ 0.3846 ✓. This is part of the famous 5-12-13 Pythagorean triple. The missing side? 12. Check: 5²+12²=25+144=169=13². Sweet!"
          },
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
        desc: "A prime number only has two factors: 1 and itself. It refuses to break into equal groups. 7 people can't form two equal rows. 6 people can (2 rows of 3). Primes are math's fundamental loners — and every other number is secretly built from them.",
        problem: "Is 37 a prime number?",
        steps: [
          {
            action: "Smart shortcut: only check up to √37",
            math: "√37 ≈ 6.1  →  only check 2, 3, and 5",
            eli5: "If 37 had a factor bigger than 6, it would also have one smaller (they come in pairs). So we only need to check divisors up to √37 ≈ 6. That's just 2, 3, and 5. Three checks and we're done."
          },
          {
            action: "Is 37 divisible by 2?",
            math: "37 ends in 7 (odd) → NO",
            eli5: "Even numbers end in 0, 2, 4, 6, or 8. 37 ends in 7 — it's odd. No even number divides into an odd number. Eliminated instantly."
          },
          {
            action: "Is 37 divisible by 3?",
            math: "3 + 7 = 10,  10 ÷ 3 is not whole → NO",
            eli5: "Divisibility trick for 3: add the digits. 3+7=10. Is 10 divisible by 3? No (3×3=9, 3×4=12 — 10 is neither). So 3 doesn't divide into 37."
          },
          {
            action: "Is 37 divisible by 5?",
            math: "37 ends in 7, not 0 or 5 → NO  →  37 is prime! 🎉",
            eli5: "Numbers divisible by 5 always end in 0 or 5. 37 ends in 7. Nope! We've checked all candidates up to √37. None work. 37 is PRIME — a mathematical loner by confirmed test."
          },
        ],
        answer: "Yes, 37 is prime"
      },
      {
        concept: "Greatest Common Factor",
        desc: "You have 24 apples and 36 oranges. You want to make identical gift bags — same number of apples and oranges in each, nothing left over. The GCF tells you the maximum number of bags you can make.",
        problem: "Find the GCF of 24 and 36.",
        steps: [
          {
            action: "List all factors of 24",
            math: "1, 2, 3, 4, 6, 8, 12, 24",
            eli5: "Factors are numbers that divide in without a remainder. For 24: try 1 (1×24), 2 (2×12), 3 (3×8), 4 (4×6). Stop when you reach the square root. You get: 1,2,3,4,6,8,12,24."
          },
          {
            action: "List all factors of 36",
            math: "1, 2, 3, 4, 6, 9, 12, 18, 36",
            eli5: "For 36: 1×36, 2×18, 3×12, 4×9, 6×6. You get: 1,2,3,4,6,9,12,18,36. Notice 9 and 18 appear here but not in 24's list — they don't divide evenly into 24."
          },
          {
            action: "Find what both lists share",
            math: "Common factors: 1, 2, 3, 4, 6, 12",
            eli5: "These numbers appear in BOTH lists: 1,2,3,4,6,12. These are divisors that work for BOTH 24 and 36. Any of these would let you split both groups equally."
          },
          {
            action: "Pick the biggest one",
            math: "GCF = 12",
            eli5: "GCF = 12. Back to the gift bags: you can make 12 bags with 2 apples and 3 oranges each. 12 × 2 = 24 apples, 12 × 3 = 36 oranges. Nothing left over. 🎁"
          },
        ],
        answer: "GCF = 12"
      },
      {
        concept: "Least Common Multiple",
        desc: "Bus A comes every 4 minutes. Bus B comes every 6 minutes. Both just arrived together. When's the next time they arrive at the same time? The LCM tells you. It's the smallest number both values divide into.",
        problem: "Find the LCM of 4 and 6.",
        steps: [
          {
            action: "List multiples of 4",
            math: "4, 8, 12, 16, 20, 24…",
            eli5: "Multiples of 4 = skip-counting by 4. Bus A arrives at minutes: 4, 8, 12, 16, 20…"
          },
          {
            action: "List multiples of 6",
            math: "6, 12, 18, 24, 30…",
            eli5: "Skip-count by 6. Bus B arrives at minutes: 6, 12, 18, 24… We're looking for the first time both buses show up at the same minute."
          },
          {
            action: "Find the first match",
            math: "First overlap = 12  ✓",
            eli5: "Minute 12 appears on BOTH lists! Both buses arrive together at minute 12. LCM = 12. If you just missed them, you wait 12 minutes. (Then another 12 minutes. Then another 12…) 🚌🚌"
          },
        ],
        answer: "LCM = 12"
      },
      {
        concept: "Even & Odd Patterns",
        desc: "Even and odd numbers follow strict rules when you add or multiply them. Once you know the rules, you can predict whether a complicated expression is even or odd — WITHOUT doing any arithmetic. Like a math superpower.",
        problem: "Without calculating, is (27 × 34 + 15) even or odd?",
        steps: [
          {
            action: "27 is odd, 34 is even — what's odd × even?",
            math: "odd × even = always EVEN",
            eli5: "Rules to burn in: odd×odd = odd, even×even = even, odd×even = EVEN. Why? Any even number has a factor of 2. Multiplying anything by an even number always creates a multiple of 2 = even."
          },
          {
            action: "27×34 is even. Now add 15 (odd)",
            math: "even + odd = ?",
            eli5: "More rules: even+even = even, odd+odd = even, even+odd = ODD. Why? Even numbers pair up perfectly. Add one extra (odd) and there's always one left hanging — that's odd."
          },
          {
            action: "Conclusion: even + odd = ODD",
            math: "(27 × 34 + 15) is ODD — no arithmetic needed! 🧠",
            eli5: "The final answer is ODD. We figured that out without touching a calculator or doing any real math. These parity rules work for any numbers, any size. That's number theory magic!"
          },
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
