import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;
