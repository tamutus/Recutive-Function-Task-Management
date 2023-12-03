import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToProjectsAggregateSchema } from "../schemas/aggregatePrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsCreateManySchema } from "../schemas/createManyPrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsCreateOneSchema } from "../schemas/createOnePrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsFindManySchema } from "../schemas/findManyPrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsGroupBySchema } from "../schemas/groupByPrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToProjects.schema";
import { PrivateEnergiesToProjectsUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToProjects.schema";

export const privateenergiestoprojectsRouter = t.router({
  aggregatePrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.aggregate(input);
      return aggregatePrivateEnergiesToProjects;
    }),
  createManyPrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.createMany(input);
      return createManyPrivateEnergiesToProjects;
    }),
  createOnePrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.create(input);
      return createOnePrivateEnergiesToProjects;
    }),
  deleteManyPrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.deleteMany(input);
      return deleteManyPrivateEnergiesToProjects;
    }),
  deleteOnePrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.delete(input);
      return deleteOnePrivateEnergiesToProjects;
    }),
  findFirstPrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.findFirst(input);
      return findFirstPrivateEnergiesToProjects;
    }),
  findFirstPrivateEnergiesToProjectsOrThrow: publicProcedure
    .input(PrivateEnergiesToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToProjectsOrThrow = await ctx.prisma.privateEnergiesToProjects.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToProjectsOrThrow;
    }),
  findManyPrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.findMany(input);
      return findManyPrivateEnergiesToProjects;
    }),
  findUniquePrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.findUnique(input);
      return findUniquePrivateEnergiesToProjects;
    }),
  findUniquePrivateEnergiesToProjectsOrThrow: publicProcedure
    .input(PrivateEnergiesToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToProjectsOrThrow = await ctx.prisma.privateEnergiesToProjects.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToProjectsOrThrow;
    }),
  groupByPrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToProjects;
    }),
  updateManyPrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.updateMany(input);
      return updateManyPrivateEnergiesToProjects;
    }),
  updateOnePrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.update(input);
      return updateOnePrivateEnergiesToProjects;
    }),
  upsertOnePrivateEnergiesToProjects: publicProcedure
    .input(PrivateEnergiesToProjectsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToProjects = await ctx.prisma.privateEnergiesToProjects.upsert(input);
      return upsertOnePrivateEnergiesToProjects;
    }),

}) 
