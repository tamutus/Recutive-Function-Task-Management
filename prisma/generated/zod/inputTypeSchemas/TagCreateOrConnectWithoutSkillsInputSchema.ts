import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutSkillsInputSchema } from './TagCreateWithoutSkillsInputSchema';
import { TagUncheckedCreateWithoutSkillsInputSchema } from './TagUncheckedCreateWithoutSkillsInputSchema';

export const TagCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutSkillsInputSchema;
