import java.util.Scanner;

public class Power {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int a = myInput.nextInt();
        int b = myInput.nextInt();

        int c = a;

        for (int i = 1; i < b; i++) {
            c *= a;
        }
        System.out.println(c);
    }
}
