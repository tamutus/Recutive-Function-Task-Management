import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillPathsInputSchema } from './PersonCreateWithoutSkillPathsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathsInputSchema } from './PersonUncheckedCreateWithoutSkillPathsInputSchema';
import { PersonCreateOrConnectWithoutSkillPathsInputSchema } from './PersonCreateOrConnectWithoutSkillPathsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutSkillPathsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutSkillPathsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillPathsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutSkillPathsInputSchema;
