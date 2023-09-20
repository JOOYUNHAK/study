import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* dp - 신나는 함수 실행 */
public class p9184 {

    public static int dp [][][] = new int[21][21][21];
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        while (true) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");

            int N = Integer.parseInt(st.nextToken());
            int M = Integer.parseInt(st.nextToken());
            int H = Integer.parseInt(st.nextToken());

            if( N == -1 && M == -1 && H == -1 ) break;

            sb.append("w(" + N + ", " + M + ", " + H + ") = ").append(w(N ,M ,H)).append('\n');
        }
        System.out.println(sb);
    }

    public static int w(int n, int m, int h) {
        if (n <= 0 || m <= 0 || h <= 0)
            return 1;

        if( isInRange(n, m, h) && dp[n][m][h] != 0 ) return dp[n][m][h];

        if (n > 20 || m > 20 || h > 20)
            return dp[20][20][20] = w(20, 20, 20);

        if (n < m && m < h)
            return dp[n][m][h] = w(n, m, h - 1) + w(n, m - 1, h - 1) - w(n, m - 1, h);

        return dp[n][m][h] = w(n - 1, m, h) + w(n - 1, m - 1, h) + w(n - 1, m, h - 1) - w(n - 1, m - 1, h - 1);
    }

    public static boolean isInRange(int n, int m, int h) {
        return 0 <= n && n <= 20 && 0 <= m && m <= 20 && 0 <= h && h <= 20;
    }
}
