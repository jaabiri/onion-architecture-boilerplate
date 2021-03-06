export interface IApplication {
  /**
   * Body Parsers
   * @Description Apply request related body parsers
   */
  initializeBodyParsers(): void;

  /**
   * Handlers
   * @Description Apply here application handlers
   */
  initializeHandlers(): void;
  /**
   * Loggers
   * @Description Apply here application wide loggers
   */
  initializeLogging(): void;

  /**
   * Plugins
   * @Description Apply here any external plugins for app
   */
  initializePlugins(): void;

  /**
   * Extensions
   * @Description Apply here extensions like swagger etc
   */
  initializeExtensions(): void;

  /**
   * Security
   * @Description Apply security related plugins like JWT, request security etc...
   */
  initializeSecurity(): void;
}
