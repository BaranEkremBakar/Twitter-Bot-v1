void setup () {
    size(699,400);
    for (int i = 0; i < 500; i++) {
        float x = random(width);
        float y = random(height);
        float r = random(100,355);
        float b = random(100,392);
        noStroke();
        fill(r, 0, b);
        ellipse(x, y, 16, 16);
    }       
    save ("output.png");
   exit();
};
