import java.io.BufferedReader;
import java.io.InputStreamReader;

public class p1018 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String []arr = br.readLine().split(" ");
        
        Integer row = Integer.parseInt(arr[0]);
        Integer col = Integer.parseInt(arr[1]);

        boolean board[][] = new boolean[row][col];
        
        for( int i = 0; i < row; i++ ) {
            String str = br.readLine();

            for( int j = 0; j < col; j++ ) {
                if( str.charAt(j) == 'W' ) board[i][j] = true;
                else board[i][j] = false;
            }
        }

        for( int i = 0; i < row - 7; i++ ) {
            for( int j = 0; j < col - 7; j++ ) {
                
            }
        }
    }
}
