import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutTagsInputSchema } from './SkillPathCreateWithoutTagsInputSchema';
import { SkillPathUncheckedCreateWithoutTagsInputSchema } from './SkillPathUncheckedCreateWithoutTagsInputSchema';
import { SkillPathCreateOrConnectWithoutTagsInputSchema } from './SkillPathCreateOrConnectWithoutTagsInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';

export const SkillPathCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional()
}).strict();

export default SkillPathCreateNestedOneWithoutTagsInputSchema;
