import React from "react";
import classNames from "classnames";

// Main Card wrapper
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-2xl shadow-md border border-gray-200 bg-white p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Header
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={classNames("mb-2 border-b pb-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Title
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={classNames("text-lg font-semibold text-gray-900", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

// Card Content
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={classNames("text-gray-800", className)} {...props}>
      {children}
    </div>
  );
}

// Card Footer
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={classNames("mt-4 pt-2 border-t", className)} {...props}>
      {children}
    </div>
  );
}
