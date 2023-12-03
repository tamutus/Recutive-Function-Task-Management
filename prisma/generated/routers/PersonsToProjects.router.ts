import { t, publicProcedure } from "./helpers/createRouter";
import { PersonsToProjectsAggregateSchema } from "../schemas/aggregatePersonsToProjects.schema";
import { PersonsToProjectsCreateManySchema } from "../schemas/createManyPersonsToProjects.schema";
import { PersonsToProjectsCreateOneSchema } from "../schemas/createOnePersonsToProjects.schema";
import { PersonsToProjectsDeleteManySchema } from "../schemas/deleteManyPersonsToProjects.schema";
import { PersonsToProjectsDeleteOneSchema } from "../schemas/deleteOnePersonsToProjects.schema";
import { PersonsToProjectsFindFirstSchema } from "../schemas/findFirstPersonsToProjects.schema";
import { PersonsToProjectsFindManySchema } from "../schemas/findManyPersonsToProjects.schema";
import { PersonsToProjectsFindUniqueSchema } from "../schemas/findUniquePersonsToProjects.schema";
import { PersonsToProjectsGroupBySchema } from "../schemas/groupByPersonsToProjects.schema";
import { PersonsToProjectsUpdateManySchema } from "../schemas/updateManyPersonsToProjects.schema";
import { PersonsToProjectsUpdateOneSchema } from "../schemas/updateOnePersonsToProjects.schema";
import { PersonsToProjectsUpsertSchema } from "../schemas/upsertOnePersonsToProjects.schema";

export const personstoprojectsRouter = t.router({
  aggregatePersonsToProjects: publicProcedure
    .input(PersonsToProjectsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePersonsToProjects = await ctx.prisma.personsToProjects.aggregate(input);
      return aggregatePersonsToProjects;
    }),
  createManyPersonsToProjects: publicProcedure
    .input(PersonsToProjectsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPersonsToProjects = await ctx.prisma.personsToProjects.createMany(input);
      return createManyPersonsToProjects;
    }),
  createOnePersonsToProjects: publicProcedure
    .input(PersonsToProjectsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePersonsToProjects = await ctx.prisma.personsToProjects.create(input);
      return createOnePersonsToProjects;
    }),
  deleteManyPersonsToProjects: publicProcedure
    .input(PersonsToProjectsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPersonsToProjects = await ctx.prisma.personsToProjects.deleteMany(input);
      return deleteManyPersonsToProjects;
    }),
  deleteOnePersonsToProjects: publicProcedure
    .input(PersonsToProjectsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePersonsToProjects = await ctx.prisma.personsToProjects.delete(input);
      return deleteOnePersonsToProjects;
    }),
  findFirstPersonsToProjects: publicProcedure
    .input(PersonsToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToProjects = await ctx.prisma.personsToProjects.findFirst(input);
      return findFirstPersonsToProjects;
    }),
  findFirstPersonsToProjectsOrThrow: publicProcedure
    .input(PersonsToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToProjectsOrThrow = await ctx.prisma.personsToProjects.findFirstOrThrow(input);
      return findFirstPersonsToProjectsOrThrow;
    }),
  findManyPersonsToProjects: publicProcedure
    .input(PersonsToProjectsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPersonsToProjects = await ctx.prisma.personsToProjects.findMany(input);
      return findManyPersonsToProjects;
    }),
  findUniquePersonsToProjects: publicProcedure
    .input(PersonsToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToProjects = await ctx.prisma.personsToProjects.findUnique(input);
      return findUniquePersonsToProjects;
    }),
  findUniquePersonsToProjectsOrThrow: publicProcedure
    .input(PersonsToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToProjectsOrThrow = await ctx.prisma.personsToProjects.findUniqueOrThrow(input);
      return findUniquePersonsToProjectsOrThrow;
    }),
  groupByPersonsToProjects: publicProcedure
    .input(PersonsToProjectsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPersonsToProjects = await ctx.prisma.personsToProjects.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPersonsToProjects;
    }),
  updateManyPersonsToProjects: publicProcedure
    .input(PersonsToProjectsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPersonsToProjects = await ctx.prisma.personsToProjects.updateMany(input);
      return updateManyPersonsToProjects;
    }),
  updateOnePersonsToProjects: publicProcedure
    .input(PersonsToProjectsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePersonsToProjects = await ctx.prisma.personsToProjects.update(input);
      return updateOnePersonsToProjects;
    }),
  upsertOnePersonsToProjects: publicProcedure
    .input(PersonsToProjectsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePersonsToProjects = await ctx.prisma.personsToProjects.upsert(input);
      return upsertOnePersonsToProjects;
    }),

}) 
