import java.util.*;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int score = myInput.nextInt();
        if (score >= 80 && score < 100) {
            System.out.println("A");
        } else if (score >= 70 && score <= 79) {
            System.out.println("B");
        } else if (score >= 60 && score <= 69) {
            System.out.println("C");
        } else if (score >= 50 && score <= 59) {
            System.out.println("D");
        } else if (score < 50) {
            System.out.println("F");
        }
    }
}