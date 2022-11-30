import java.util.*;

public class Operators {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int a = myInput.nextInt();
        int b = myInput.nextInt();

        System.out.println(a + " + " + b + " = " + (a + b));
        System.out.println(a + " - " + b + " = " + (a - b));
        System.out.println(a + " * " + b + " = " + (a * b));
        System.out.println(a + " / " + b + " = " + (a / b));
    }
}
