import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutStudentsInputSchema } from './SkillCreateWithoutStudentsInputSchema';
import { SkillUncheckedCreateWithoutStudentsInputSchema } from './SkillUncheckedCreateWithoutStudentsInputSchema';

export const SkillCreateOrConnectWithoutStudentsInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutStudentsInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutStudentsInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutStudentsInputSchema;
