import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateWithoutTagsInputSchema } from './SkillPathUpdateWithoutTagsInputSchema';
import { SkillPathUncheckedUpdateWithoutTagsInputSchema } from './SkillPathUncheckedUpdateWithoutTagsInputSchema';
import { SkillPathCreateWithoutTagsInputSchema } from './SkillPathCreateWithoutTagsInputSchema';
import { SkillPathUncheckedCreateWithoutTagsInputSchema } from './SkillPathUncheckedCreateWithoutTagsInputSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillPathUpsertWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => SkillPathUpdateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => SkillPathWhereInputSchema).optional()
}).strict();

export default SkillPathUpsertWithoutTagsInputSchema;
