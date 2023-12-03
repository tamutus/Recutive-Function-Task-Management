import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutPrioritiesInputSchema } from './PersonCreateWithoutPrioritiesInputSchema';
import { PersonUncheckedCreateWithoutPrioritiesInputSchema } from './PersonUncheckedCreateWithoutPrioritiesInputSchema';
import { PersonCreateOrConnectWithoutPrioritiesInputSchema } from './PersonCreateOrConnectWithoutPrioritiesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutPrioritiesInputSchema;
