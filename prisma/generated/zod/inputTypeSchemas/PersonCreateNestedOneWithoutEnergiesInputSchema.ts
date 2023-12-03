import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEnergiesInputSchema } from './PersonCreateWithoutEnergiesInputSchema';
import { PersonUncheckedCreateWithoutEnergiesInputSchema } from './PersonUncheckedCreateWithoutEnergiesInputSchema';
import { PersonCreateOrConnectWithoutEnergiesInputSchema } from './PersonCreateOrConnectWithoutEnergiesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutEnergiesInputSchema;
