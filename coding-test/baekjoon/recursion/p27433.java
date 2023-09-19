import java.io.BufferedReader;
import java.io.InputStreamReader;

/* 재귀 - 팩토리얼2 */
public class p27433 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        System.out.println(recursion(N));
    } 

    private static long recursion(int n) {
        if( n == 0 || n == 1 ) return 1;
        return n * recursion(n - 1);
    }
}
