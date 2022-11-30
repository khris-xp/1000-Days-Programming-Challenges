import java.util.*;

public class Physics {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int s = myInput.nextInt();
        int t = myInput.nextInt();
        int v = s / t;

        System.out.println(v + " km/h");
    }
}
