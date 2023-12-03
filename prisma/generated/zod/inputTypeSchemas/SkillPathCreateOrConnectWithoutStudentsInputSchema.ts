import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathCreateWithoutStudentsInputSchema } from './SkillPathCreateWithoutStudentsInputSchema';
import { SkillPathUncheckedCreateWithoutStudentsInputSchema } from './SkillPathUncheckedCreateWithoutStudentsInputSchema';

export const SkillPathCreateOrConnectWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathCreateOrConnectWithoutStudentsInput> = z.object({
  where: z.lazy(() => SkillPathWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutStudentsInputSchema) ]),
}).strict();

export default SkillPathCreateOrConnectWithoutStudentsInputSchema;
