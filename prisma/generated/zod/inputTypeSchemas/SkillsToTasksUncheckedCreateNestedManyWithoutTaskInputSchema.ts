import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksCreateWithoutTaskInputSchema } from './SkillsToTasksCreateWithoutTaskInputSchema';
import { SkillsToTasksUncheckedCreateWithoutTaskInputSchema } from './SkillsToTasksUncheckedCreateWithoutTaskInputSchema';
import { SkillsToTasksCreateOrConnectWithoutTaskInputSchema } from './SkillsToTasksCreateOrConnectWithoutTaskInputSchema';
import { SkillsToTasksCreateManyTaskInputEnvelopeSchema } from './SkillsToTasksCreateManyTaskInputEnvelopeSchema';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';

export const SkillsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => SkillsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => SkillsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema;
