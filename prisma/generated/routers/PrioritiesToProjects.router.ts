import { t, publicProcedure } from "./helpers/createRouter";
import { PrioritiesToProjectsAggregateSchema } from "../schemas/aggregatePrioritiesToProjects.schema";
import { PrioritiesToProjectsCreateManySchema } from "../schemas/createManyPrioritiesToProjects.schema";
import { PrioritiesToProjectsCreateOneSchema } from "../schemas/createOnePrioritiesToProjects.schema";
import { PrioritiesToProjectsDeleteManySchema } from "../schemas/deleteManyPrioritiesToProjects.schema";
import { PrioritiesToProjectsDeleteOneSchema } from "../schemas/deleteOnePrioritiesToProjects.schema";
import { PrioritiesToProjectsFindFirstSchema } from "../schemas/findFirstPrioritiesToProjects.schema";
import { PrioritiesToProjectsFindManySchema } from "../schemas/findManyPrioritiesToProjects.schema";
import { PrioritiesToProjectsFindUniqueSchema } from "../schemas/findUniquePrioritiesToProjects.schema";
import { PrioritiesToProjectsGroupBySchema } from "../schemas/groupByPrioritiesToProjects.schema";
import { PrioritiesToProjectsUpdateManySchema } from "../schemas/updateManyPrioritiesToProjects.schema";
import { PrioritiesToProjectsUpdateOneSchema } from "../schemas/updateOnePrioritiesToProjects.schema";
import { PrioritiesToProjectsUpsertSchema } from "../schemas/upsertOnePrioritiesToProjects.schema";

export const prioritiestoprojectsRouter = t.router({
  aggregatePrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrioritiesToProjects = await ctx.prisma.prioritiesToProjects.aggregate(input);
      return aggregatePrioritiesToProjects;
    }),
  createManyPrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrioritiesToProjects = await ctx.prisma.prioritiesToProjects.createMany(input);
      return createManyPrioritiesToProjects;
    }),
  createOnePrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrioritiesToProjects = await ctx.prisma.prioritiesToProjects.create(input);
      return createOnePrioritiesToProjects;
    }),
  deleteManyPrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrioritiesToProjects = await ctx.prisma.prioritiesToProjects.deleteMany(input);
      return deleteManyPrioritiesToProjects;
    }),
  deleteOnePrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrioritiesToProjects = await ctx.prisma.prioritiesToProjects.delete(input);
      return deleteOnePrioritiesToProjects;
    }),
  findFirstPrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToProjects = await ctx.prisma.prioritiesToProjects.findFirst(input);
      return findFirstPrioritiesToProjects;
    }),
  findFirstPrioritiesToProjectsOrThrow: publicProcedure
    .input(PrioritiesToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToProjectsOrThrow = await ctx.prisma.prioritiesToProjects.findFirstOrThrow(input);
      return findFirstPrioritiesToProjectsOrThrow;
    }),
  findManyPrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrioritiesToProjects = await ctx.prisma.prioritiesToProjects.findMany(input);
      return findManyPrioritiesToProjects;
    }),
  findUniquePrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToProjects = await ctx.prisma.prioritiesToProjects.findUnique(input);
      return findUniquePrioritiesToProjects;
    }),
  findUniquePrioritiesToProjectsOrThrow: publicProcedure
    .input(PrioritiesToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToProjectsOrThrow = await ctx.prisma.prioritiesToProjects.findUniqueOrThrow(input);
      return findUniquePrioritiesToProjectsOrThrow;
    }),
  groupByPrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrioritiesToProjects = await ctx.prisma.prioritiesToProjects.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrioritiesToProjects;
    }),
  updateManyPrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrioritiesToProjects = await ctx.prisma.prioritiesToProjects.updateMany(input);
      return updateManyPrioritiesToProjects;
    }),
  updateOnePrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrioritiesToProjects = await ctx.prisma.prioritiesToProjects.update(input);
      return updateOnePrioritiesToProjects;
    }),
  upsertOnePrioritiesToProjects: publicProcedure
    .input(PrioritiesToProjectsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrioritiesToProjects = await ctx.prisma.prioritiesToProjects.upsert(input);
      return upsertOnePrioritiesToProjects;
    }),

}) 
