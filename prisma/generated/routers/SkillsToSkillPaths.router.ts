import { t, publicProcedure } from "./helpers/createRouter";
import { SkillsToSkillPathsAggregateSchema } from "../schemas/aggregateSkillsToSkillPaths.schema";
import { SkillsToSkillPathsCreateManySchema } from "../schemas/createManySkillsToSkillPaths.schema";
import { SkillsToSkillPathsCreateOneSchema } from "../schemas/createOneSkillsToSkillPaths.schema";
import { SkillsToSkillPathsDeleteManySchema } from "../schemas/deleteManySkillsToSkillPaths.schema";
import { SkillsToSkillPathsDeleteOneSchema } from "../schemas/deleteOneSkillsToSkillPaths.schema";
import { SkillsToSkillPathsFindFirstSchema } from "../schemas/findFirstSkillsToSkillPaths.schema";
import { SkillsToSkillPathsFindManySchema } from "../schemas/findManySkillsToSkillPaths.schema";
import { SkillsToSkillPathsFindUniqueSchema } from "../schemas/findUniqueSkillsToSkillPaths.schema";
import { SkillsToSkillPathsGroupBySchema } from "../schemas/groupBySkillsToSkillPaths.schema";
import { SkillsToSkillPathsUpdateManySchema } from "../schemas/updateManySkillsToSkillPaths.schema";
import { SkillsToSkillPathsUpdateOneSchema } from "../schemas/updateOneSkillsToSkillPaths.schema";
import { SkillsToSkillPathsUpsertSchema } from "../schemas/upsertOneSkillsToSkillPaths.schema";

export const skillstoskillpathsRouter = t.router({
  aggregateSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.aggregate(input);
      return aggregateSkillsToSkillPaths;
    }),
  createManySkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.createMany(input);
      return createManySkillsToSkillPaths;
    }),
  createOneSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.create(input);
      return createOneSkillsToSkillPaths;
    }),
  deleteManySkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.deleteMany(input);
      return deleteManySkillsToSkillPaths;
    }),
  deleteOneSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.delete(input);
      return deleteOneSkillsToSkillPaths;
    }),
  findFirstSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.findFirst(input);
      return findFirstSkillsToSkillPaths;
    }),
  findFirstSkillsToSkillPathsOrThrow: publicProcedure
    .input(SkillsToSkillPathsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToSkillPathsOrThrow = await ctx.prisma.skillsToSkillPaths.findFirstOrThrow(input);
      return findFirstSkillsToSkillPathsOrThrow;
    }),
  findManySkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.findMany(input);
      return findManySkillsToSkillPaths;
    }),
  findUniqueSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.findUnique(input);
      return findUniqueSkillsToSkillPaths;
    }),
  findUniqueSkillsToSkillPathsOrThrow: publicProcedure
    .input(SkillsToSkillPathsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToSkillPathsOrThrow = await ctx.prisma.skillsToSkillPaths.findUniqueOrThrow(input);
      return findUniqueSkillsToSkillPathsOrThrow;
    }),
  groupBySkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillsToSkillPaths;
    }),
  updateManySkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.updateMany(input);
      return updateManySkillsToSkillPaths;
    }),
  updateOneSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.update(input);
      return updateOneSkillsToSkillPaths;
    }),
  upsertOneSkillsToSkillPaths: publicProcedure
    .input(SkillsToSkillPathsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillsToSkillPaths = await ctx.prisma.skillsToSkillPaths.upsert(input);
      return upsertOneSkillsToSkillPaths;
    }),

}) 
