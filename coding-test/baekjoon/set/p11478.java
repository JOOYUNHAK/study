import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;

/* 서로 다른 부분 문자열의 개수 */
public class p11478 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = br.readLine();

        HashSet<String> set = new HashSet<String>();

        int length = str.length();

        for( int i = 0; i < length; i++ ) {
            for( int j = i + 1; j <= length; j++ ) {
                set.add(str.substring(i, j));
            }
        }
        System.out.println(set.size());
    }
}
