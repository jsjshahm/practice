import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        int A, B, sum;
        Scanner scan = new Scanner(System.in);

        A = scan.nextInt();
        
        B = scan.nextInt();
        
        sum = A + B;
        System.out.println(sum);
        scan.close();
    }
        
}