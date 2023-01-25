import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        int A, B, multiple;
        Scanner scan = new Scanner(System.in);
        
        A = scan.nextInt();
        B = scan.nextInt();
        multiple = A * B;
        
        System.out.println(multiple);
        scan.close();
    }
}