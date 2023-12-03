import { t, publicProcedure } from "./helpers/createRouter";
import { PersonsToSkillPathsAggregateSchema } from "../schemas/aggregatePersonsToSkillPaths.schema";
import { PersonsToSkillPathsCreateManySchema } from "../schemas/createManyPersonsToSkillPaths.schema";
import { PersonsToSkillPathsCreateOneSchema } from "../schemas/createOnePersonsToSkillPaths.schema";
import { PersonsToSkillPathsDeleteManySchema } from "../schemas/deleteManyPersonsToSkillPaths.schema";
import { PersonsToSkillPathsDeleteOneSchema } from "../schemas/deleteOnePersonsToSkillPaths.schema";
import { PersonsToSkillPathsFindFirstSchema } from "../schemas/findFirstPersonsToSkillPaths.schema";
import { PersonsToSkillPathsFindManySchema } from "../schemas/findManyPersonsToSkillPaths.schema";
import { PersonsToSkillPathsFindUniqueSchema } from "../schemas/findUniquePersonsToSkillPaths.schema";
import { PersonsToSkillPathsGroupBySchema } from "../schemas/groupByPersonsToSkillPaths.schema";
import { PersonsToSkillPathsUpdateManySchema } from "../schemas/updateManyPersonsToSkillPaths.schema";
import { PersonsToSkillPathsUpdateOneSchema } from "../schemas/updateOnePersonsToSkillPaths.schema";
import { PersonsToSkillPathsUpsertSchema } from "../schemas/upsertOnePersonsToSkillPaths.schema";

export const personstoskillpathsRouter = t.router({
  aggregatePersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.aggregate(input);
      return aggregatePersonsToSkillPaths;
    }),
  createManyPersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.createMany(input);
      return createManyPersonsToSkillPaths;
    }),
  createOnePersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.create(input);
      return createOnePersonsToSkillPaths;
    }),
  deleteManyPersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.deleteMany(input);
      return deleteManyPersonsToSkillPaths;
    }),
  deleteOnePersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.delete(input);
      return deleteOnePersonsToSkillPaths;
    }),
  findFirstPersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.findFirst(input);
      return findFirstPersonsToSkillPaths;
    }),
  findFirstPersonsToSkillPathsOrThrow: publicProcedure
    .input(PersonsToSkillPathsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToSkillPathsOrThrow = await ctx.prisma.personsToSkillPaths.findFirstOrThrow(input);
      return findFirstPersonsToSkillPathsOrThrow;
    }),
  findManyPersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.findMany(input);
      return findManyPersonsToSkillPaths;
    }),
  findUniquePersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.findUnique(input);
      return findUniquePersonsToSkillPaths;
    }),
  findUniquePersonsToSkillPathsOrThrow: publicProcedure
    .input(PersonsToSkillPathsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToSkillPathsOrThrow = await ctx.prisma.personsToSkillPaths.findUniqueOrThrow(input);
      return findUniquePersonsToSkillPathsOrThrow;
    }),
  groupByPersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPersonsToSkillPaths;
    }),
  updateManyPersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.updateMany(input);
      return updateManyPersonsToSkillPaths;
    }),
  updateOnePersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.update(input);
      return updateOnePersonsToSkillPaths;
    }),
  upsertOnePersonsToSkillPaths: publicProcedure
    .input(PersonsToSkillPathsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePersonsToSkillPaths = await ctx.prisma.personsToSkillPaths.upsert(input);
      return upsertOnePersonsToSkillPaths;
    }),

}) 
