import java.util.*;

public class NotOneButThree {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int num1 = myInput.nextInt();
        int num2 = myInput.nextInt();
        int num3 = myInput.nextInt();

        if (num1 >= num2 && num1 >= num3) {
            System.out.println("MAX : " + num1);
        } else if (num2 >= num1 && num2 >= num3) {
            System.out.println("MAX : " + num2);
        } else if (num3 >= num1 && num3 >= num2) {
            System.out.println("MAX : " + num3);
        }
    }
}
