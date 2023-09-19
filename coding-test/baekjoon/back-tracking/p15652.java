import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* 재귀 - N과 M(4) */
public class p15652 {
    private static int N, M;
    private static int arr[];
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken()); M = Integer.parseInt(st.nextToken());

        arr = new int[M];

        dfs(1, 0);
    }

    private static void dfs(int at, int depth) {
        if( depth == M ) {
            for( int num: arr ) {
                System.out.print(num + " ");
            }
            System.out.println();
            return;
        }

        for( int i = at; i <= N; i++ ) {
            arr[depth] = i;
            dfs(i, depth + 1);
        }
    }
}
