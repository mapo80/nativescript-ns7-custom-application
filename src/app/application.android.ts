@NativeClass()
@JavaProxy("com.custom.NativeScriptApplication")
export class Application extends android.app.Application {
    
    public onCreate(): void {
        super.onCreate();
    }

    public attachBaseContext(baseContext: android.content.Context) {
        super.attachBaseContext(baseContext);

        // This code enables MultiDex support for the application (if needed)
        // androidx.multidex.MultiDex.install(this);
    }
}
