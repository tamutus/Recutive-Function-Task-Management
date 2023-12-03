import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';

export const SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema;
