import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathCreateWithoutTagsInputSchema } from './SkillPathCreateWithoutTagsInputSchema';
import { SkillPathUncheckedCreateWithoutTagsInputSchema } from './SkillPathUncheckedCreateWithoutTagsInputSchema';

export const SkillPathCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => SkillPathWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default SkillPathCreateOrConnectWithoutTagsInputSchema;
