import java.io.BufferedReader;
import java.io.InputStreamReader;

/* 백트래킹 - nQueen문제 */
class p9663 {
    private static int count = 0;
    private static int N;
    private static int arr[];
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        arr = new int[N];

        nQueen(0);
        System.out.println(count);
    }

    public static void nQueen(int depth) {
        if( depth == N ) {
            count++;
            return;
        }

        for( int i = 0; i < N; i++ ) {
            arr[depth] = i;
            if(possiblity(depth)) 
                nQueen(depth + 1);
        }
    }

    public static boolean possiblity(int depth) {
        for( int i = 0; i < depth; i++ ) {
            if( arr[depth] == arr[i] ) return false;

            if( Math.abs(depth - i) == Math.abs(arr[depth] - arr[i]))
                return false;
        }
        return true;
     }
}