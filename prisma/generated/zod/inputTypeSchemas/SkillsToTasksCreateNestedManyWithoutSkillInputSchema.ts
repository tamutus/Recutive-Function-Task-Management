import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksCreateWithoutSkillInputSchema } from './SkillsToTasksCreateWithoutSkillInputSchema';
import { SkillsToTasksUncheckedCreateWithoutSkillInputSchema } from './SkillsToTasksUncheckedCreateWithoutSkillInputSchema';
import { SkillsToTasksCreateOrConnectWithoutSkillInputSchema } from './SkillsToTasksCreateOrConnectWithoutSkillInputSchema';
import { SkillsToTasksCreateManySkillInputEnvelopeSchema } from './SkillsToTasksCreateManySkillInputEnvelopeSchema';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';

export const SkillsToTasksCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToTasksUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTasksCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToTasksCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTasksCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTasksWhereUniqueInputSchema),z.lazy(() => SkillsToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTasksCreateNestedManyWithoutSkillInputSchema;
