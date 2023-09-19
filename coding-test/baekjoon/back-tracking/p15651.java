import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* 재귀 - N과 M(3) */
public class p15651 {
    private static int N, M;
    private static int arr [];
    private static StringBuilder sb = new StringBuilder();
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken()); M = Integer.parseInt(st.nextToken());
        
        arr = new int[M];

        dfs(0);
        System.out.println(sb);
    }

    private static void dfs(int depth) {
        if( depth == M ) {
            for( int num: arr ) {
                sb.append(num).append(" ");
            }
            sb.append("\n");
            return;
        }
        
        for( int i = 0; i < N; i++ ) {
            arr[depth] = i + 1;
            dfs(depth + 1);
        }
    }

    
}
