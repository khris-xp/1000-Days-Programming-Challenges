import java.util.*;

public class MoreThanOrLessThan {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int a = myInput.nextInt();
        int b = myInput.nextInt();

        if (a > b) {
            System.out.println("MAX : " + a);
            System.out.println("MIN : " + b);
        } else if (b > a) {
            System.out.println("MAX : " + b);
            System.out.println("MIN : " + a);
        }
    }
}
