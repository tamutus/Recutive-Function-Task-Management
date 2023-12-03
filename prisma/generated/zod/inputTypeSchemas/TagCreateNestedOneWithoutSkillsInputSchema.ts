import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutSkillsInputSchema } from './TagCreateWithoutSkillsInputSchema';
import { TagUncheckedCreateWithoutSkillsInputSchema } from './TagUncheckedCreateWithoutSkillsInputSchema';
import { TagCreateOrConnectWithoutSkillsInputSchema } from './TagCreateOrConnectWithoutSkillsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutSkillsInputSchema;
